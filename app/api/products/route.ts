import WooCommerceAPI from '../../utils/woocommerce';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Anfrage an WooCommerce-API
    const response = await WooCommerceAPI.get('products', {
      params: { per_page: 10 },
    });

    console.log(response.data);

    // Erfolgreiche Antwort zurückgeben
    return NextResponse.json(response.data, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('API-Fehler:', error.message);

      // Fehlerhafte Antwort zurückgeben
      return NextResponse.json(
        { error: error.message || 'Fehler beim Abrufen der Produkte' },
        { status: 500 }
      );
    }

    // Fallback für unbekannte Fehler
    return NextResponse.json(
      { error: 'Unbekannter Fehler' },
      { status: 500 }
    );
  }
}
