
using Invoiceify.Infrastructure.Interface;
using Invoiceify.Infrastructure.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Invoiceify.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IUserService, UserService>();
        return services;
    }
}