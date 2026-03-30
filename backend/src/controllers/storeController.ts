import { Request, Response } from 'express';
import { stores } from '../db/mockData';

export const getNearbyStores = (req: Request, res: Response) => {
  const { lat, lng, radius = 1000 } = req.query;

  // Заглушка - возвращаем все магазины
  // В реальности здесь будет расчет расстояния и фильтрация
  const nearbyStores = stores.map(store => ({
    id: store.id,
    name: store.name,
    address: store.address,
    latitude: store.latitude,
    longitude: store.longitude,
    distance: Math.floor(Math.random() * 1000) + ' м' // Заглушка
  }));

  res.json(nearbyStores);
};