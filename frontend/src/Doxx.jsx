import styled from "styled-components";

function formatPostalAddress(address) {
    const { house_number, road, suburb, city, state, postcode, country } = address;
    return `${road || ''} ${house_number || ''}, ${city || ''}, ${state || ''}, ${postcode || ''}, ${country || ''}`.replace(/ ,/g, ',').replace(/,,/g, ',').trim();
  }

function Doxx({setAddress}){

    const DoxxUser = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
          } else {
            alert("Do it yourself then...");
          }


    };

    const errorCallback = () => {
        alert("Do it yourself then...");

    }

    const successCallback = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
      
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      
        getAddressFromCoordinates(latitude, longitude);
    }


    const getAddressFromCoordinates = (latitude, longitude) => {
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`)
        .then(response => response.json())
        .then(data => {
          if (data && data.address) {
            const address = data.address;
            // Construct the postal address from the data
            const postalAddress = formatPostalAddress(address);
            setAddress(postalAddress)
          } else {
            console.error("No address found for these coordinates.");
          }
        })
        .catch(error => {
          console.error("Error fetching address:", error);
        });
    }


    return(
        <>

        <MinSizeButton type="button" onClick={DoxxUser}>I don't know</MinSizeButton>  
        
        </>
    );
}

const MinSizeButton = styled.button`
  max-width: max-content;
`;  

export default Doxx;
