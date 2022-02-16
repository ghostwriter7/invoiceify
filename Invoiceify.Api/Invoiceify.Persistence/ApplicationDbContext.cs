using Invoiceify.Domain.Model.Entity;
using Microsoft.EntityFrameworkCore;

namespace Invoiceify.Persistence;

public class ApplicationDbContext :DbContext
{
    public DbSet<UserEntity> Users { get; set; }
    
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
        
    }
}