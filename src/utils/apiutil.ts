import Fuse from "fuse.js";

// Define the Product interface
import { Product } from "../types";

// Function to find the best match
export function findBestMatch(
  ocrText: string,
  products: Product[]
): string  {
  // Preprocess OCR text: Normalize case and remove unnecessary characters
  const processedText = ocrText.toLowerCase().replace(/[^a-z\s]/g, "").trim();

  // Configure Fuse.js
  const options: Fuse.IFuseOptions<Product> = {
    keys: ["name"], // Search within the 'name' field
    threshold: 0.4, // Adjust sensitivity (lower = stricter match)
    includeScore: true, // Include similarity scores in the result
  };

  // Initialize Fuse.js
  const fuse = new Fuse(products, options);

  // Perform fuzzy search
  const result = fuse.search(processedText);

  // Return the best match or null if no match is found
  if (result.length > 0) {
    return result[0].item.name;
    } else {
    return "no match";
  }
}
