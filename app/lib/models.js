import modelsData from "../data/models.json";

export async function getAllModels() {
  // Just return the JSON data
  return modelsData;
}

export async function getModelById(id) {
  const foundModel = modelsData.find(
    (model) => model.id.toString() === id.toString()
  );
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`);
  }
  return foundModel;
}
