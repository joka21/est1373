type Product = {
    id: number;
    name: string;
    price: string;
  };
  
  export default async function ProductsPage() {
    const res = await fetch('http://localhost:3000/api/products', {
      cache: 'no-store',
    });
  
    if (!res.ok) {
      throw new Error('Fehler beim Abrufen der Produkte');
    }
  
    const products: Product[] = await res.json();
  
    return (
      <div>
        <h1>Produkte</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price} €</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  