type Product = {
  id: number;
  name: string;
  price: string;
};

export default async function ProductsPage() {
  try {
    const res = await fetch('https://est1373.vercel.app/api/products', {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Fehler beim Abrufen der Produkte: ${errorMessage}`);
    }

    // Typisierung der JSON-Antwort mit Type Assertion
    const products = (await res.json()) as Product[];

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
  } catch (error) {
    return (
      <div>
        <h1>Fehler</h1>
        <p>{(error as Error).message}</p>
      </div>
    );
  }
}

