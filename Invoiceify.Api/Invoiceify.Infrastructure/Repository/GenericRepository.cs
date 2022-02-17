using Invoiceify.Domain.Model.Entity;
using Invoiceify.Infrastructure.Interface;
using Invoiceify.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Invoiceify.Infrastructure.Repository;

public abstract class GenericRepository<T> : IGenericRepository<T>  where T :Entity
{
    private readonly DbSet<T> _entities;
    private readonly ApplicationDbContext _dbContext;
    
    public GenericRepository(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
        _entities = _dbContext.Set<T>();
    }
    
    public virtual async Task<T> Add(T obj)
    {
        if (_entities == null)
            throw new ArgumentNullException("entity");

        var entry = await _entities.AddAsync(obj);
        await _dbContext.SaveChangesAsync();

        return entry.Entity;
    }

    public virtual async Task Update(T obj)
    {
        if (_entities == null)
            throw new ArgumentNullException("entity");

        _entities.Update(obj);
        await _dbContext.SaveChangesAsync();
    }

    public virtual async Task Delete(T obj)
    {
        if (_entities == null)
            throw new ArgumentNullException("entity");

        _entities.Remove(obj);
        await _dbContext.SaveChangesAsync();
    }

    public virtual  T ? GetById(int id)
    {
        return _entities.FirstOrDefault(a => a.Id == id);
    }

    public IEnumerable<T> GetAll()
    {
        return _entities.AsEnumerable();
    }
}