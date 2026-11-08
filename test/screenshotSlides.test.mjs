import test from "node:test";
import assert from "node:assert/strict";
import { buildScreenshotSlides } from "../src/lib/screenshotSlides.js";
const shot = (name) => ({ src: "/assets/projects/" + name, alt: name, caption: name });

test("pairs matching views once while retaining unrelated screenshots", () => {
  const input = [shot("saske.jpg"), shot("saske-medicine.jpg"), shot("saske-mobile-medicine.jpg")];
  const result = buildScreenshotSlides(input);
  assert.equal(result.length, 2);
  assert.deepEqual(result[1].shots, input.slice(1));
  assert.ok(result[1].comparison);
  assert.equal(input.length, 3);
});

test("an unavailable partner leaves the screenshot usable on its own", () => {
  const input = [shot("saske-mobile-companion.jpg")];
  assert.deepEqual(buildScreenshotSlides(input)[0].shots, input);
  assert.deepEqual(buildScreenshotSlides(), []);
});

test("mobile-first saved ordering still retains both views in one pair", () => {
  const input = [shot("saske-mobile-companion.jpg"), shot("saske-companion.jpg")];
  const result = buildScreenshotSlides(input);
  assert.equal(result.length, 1);
  assert.deepEqual(result[0].shots, [input[1], input[0]]);
});
