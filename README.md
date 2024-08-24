# RottAI

This project was implemented for the 2024 Junction Stupid Hack hackathon.

## Technologies

The backend is built as an ASP.NET Core application running on .NET 8 that uses Open AI's official .NET client SDK

The frontend is built as a React.js app with [Bun](https://bun.sh/) as the runtime for installing dependencies.

## Dependencies

To run the project, [Bun](https://bun.sh/) must be installed locally, as well as [.NET 8.x](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)

The backend directory must contain a `.env` file, which contains your OpenAI API Key and the ID of your [Assistant](https://platform.openai.com/docs/assistants/overview) in OpenAI.

The response format for the Assistant is specified in `frontend/cv.json`, which is set in the assistant with a JSON response type.

## Running

To run the frontend, run `bun run dev` in the `frontend` directory.
To run the backend, rub `dotnet run` in the `backend` directory.