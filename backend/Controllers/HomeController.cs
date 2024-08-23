using Microsoft.AspNetCore.Mvc;

namespace RottAI.Controllers;

[ApiController]
[Produces("application/json")]
[Consumes("application/json")]
[Route("[controller]")]
public class ApiController : Controller
{

    public ApiController()
    {
    }

    [HttpGet]
    public IActionResult GetResult()
    {
        return new OkResult();
    }
}
