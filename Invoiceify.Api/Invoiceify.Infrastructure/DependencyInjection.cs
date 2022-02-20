
using Invoiceify.Domain.Model.Entity;
using Invoiceify.Infrastructure.Interface;
using Invoiceify.Infrastructure.Repository;
using Invoiceify.Infrastructure.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Invoiceify.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IUserService, UserService>();
        services.AddScoped<IGenericRepository<ProductEntity>, GenericRepository<ProductEntity>>();
        services.AddScoped<IGenericRepository<CategoriesEntity>, GenericRepository<CategoriesEntity>>();
        
        return services;
    }
}