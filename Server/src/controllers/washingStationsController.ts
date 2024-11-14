import { Request, Response } from 'express';
import * as washingStationService from '../services/washingStationService';

export const getWashingStations = async (req: Request, res: Response): Promise<void> => {
  try {
    const washingStations = await washingStationService.getWashingStations();
    res.status(200).json(washingStations);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getWashingStationById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const washingStation = await washingStationService.getWashingStationById(id);
    if (!washingStation) {
      res.status(404).json({ error: 'Washing Station not found' });
      return;
    }
    res.status(200).json(washingStation);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createWashingStation = async (req: Request, res: Response): Promise<void> => {
  const data = req.body;

  try {
    const newWashingStation = await washingStationService.createWashingStation(data);
    res.status(201).json(newWashingStation);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateWashingStation = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedWashingStation = await washingStationService.updateWashingStation(id, updateData);
    if (!updatedWashingStation) {
      res.status(404).json({ error: 'Washing Station not found' });
      return;
    }
    res.status(200).json(updatedWashingStation);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteWashingStation = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deleted = await washingStationService.deleteWashingStation(id);
    if (!deleted) {
      res.status(404).json({ error: 'Washing Station not found' });
      return;
    }
    res.status(200).json({ message: 'Washing Station deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
