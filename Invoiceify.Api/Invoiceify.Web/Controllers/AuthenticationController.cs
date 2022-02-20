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

    [HttpPost("Register")]
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
                User = new User() {Id = resultCreateUser.User.Id, Email = resultCreateUser.User.Email},
            });
        }

        return new BadRequestResult();
    }

    [HttpPost("Login")]
    public async Task<IActionResult> Login(LoginViewModel login)
    {
        var user = await _userService.GetUserByEmail(login.Email);
        if (user == null)
        {
            return new NotFoundObjectResult(new AuthenticateResult()
            {
                Succeeded = false,
                Errors = new[] { "User is not exist" }
            });
        }

        var resultLogin = _userService.Login(user, login.Password);
        if (!resultLogin)
        {
            return new UnauthorizedObjectResult(new AuthenticateResult()
            {
                Succeeded = false,
                Errors = new []{"The login or password is not correct"},
            });   
        }

        return new OkObjectResult(new AuthenticateResult()
        {
            Succeeded = true,
            User = new User()
            {
                Id = user.Id,
                Email = user.Email,
            },
        });
    }
}