import WooCommerceAPI from '../../utils/woocommerce';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await WooCommerceAPI.get('products', {
      params: { per_page: 10 }
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    console.error('API-Fehler:', error);
    return NextResponse.json(
      { error: 'Fehler beim Abrufen der Produkte' },
      { status: 500 }
    );
  }
}