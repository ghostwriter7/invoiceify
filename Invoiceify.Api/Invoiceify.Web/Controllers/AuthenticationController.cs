using System.Net;
using Invoiceify.Domain.Model.Contract;
using Invoiceify.Domain.Model.DTO;
using Invoiceify.Domain.Model.Entity;
using Invoiceify.Infrastructure.Interface;
using Microsoft.AspNetCore.Mvc;

namespace Invoiceify.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthenticationController : Controller
{
    private readonly IUserService _userService;

    public AuthenticationController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost]
    public async Task<IActionResult> Register(RegisterViewModel register)
    {
        UserEntity user = new UserEntity()
        {
            Email = register.Email,
        };

        var resultCreateUser = await _userService.CreateAsync(user, register.Password);
        if (resultCreateUser.Succeeded)
        {
            return new OkObjectResult(new AuthenticateResult()
            {
                Token = "",
                StatusCode = HttpStatusCode.Created,
                User = new User() {Id = resultCreateUser.User.Id, Email = resultCreateUser.User.Email},
            });
        }

        return new BadRequestResult();
    }
}