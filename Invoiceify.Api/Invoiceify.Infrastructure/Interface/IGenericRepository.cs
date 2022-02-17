namespace Invoiceify.Infrastructure.Interface;

public interface IGenericRepository<T> where T :class
{
    Task<T> Add(T obj);
    Task Update(T obj);
    Task Delete(T obj);
    T ? GetById(int id);
    IEnumerable<T> GetAll();
}