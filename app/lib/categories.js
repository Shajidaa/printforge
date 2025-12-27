import categories from "@/data/categories.json";
export async function getAllModels() {
  // Just return the JSON data
  return categories;
}

export async function getModelById(id) {
  const foundModel = categories.find(
    (model) => model.id.toString() === id.toString()
  );
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`);
  }
  return foundModel;
}
