import WooCommerceAPI from '../../utils/woocommerce';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Anfrage an WooCommerce-API
    const response = await WooCommerceAPI.get('products', {
      params: { per_page: 10 }, // Anzahl der Produkte pro Seite
    });
    console.log(response.data);

    // Erfolgreiche Antwort zurückgeben
    return NextResponse.json(response.data, { status: 200 });
  } catch (error: any) {
    console.error('API-Fehler:', error.response?.data || error.message);

    // Fehlerhafte Antwort zurückgeben
    return NextResponse.json(
      { error: error.response?.data || 'Fehler beim Abrufen der Produkte' },
      { status: error.response?.status || 500 }
    );
  }
}
