using RottAI;
using RottAI.Services;

var builder = WebApplication.CreateBuilder(args);

var root = Directory.GetCurrentDirectory();
var dotenv = Path.Combine(root, ".env");
DotEnv.Load(dotenv);

builder.Configuration
.SetBasePath(Directory.GetCurrentDirectory())
.AddEnvironmentVariables();

builder.Services.AddControllers();

builder.Services.AddSingleton(new OpenAIService());

var app = builder.Build();

app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.MapControllers();

app.UseRouting();

app.Run();
