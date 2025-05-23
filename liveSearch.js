// liveSearch.js
// Mocked x.ai fetch logic for gear recommendations
// Replace with real x.ai fetch call later

// Simple cache using localStorage
function getCachedGear(key) {
  const cached = localStorage.getItem('gearCache_' + key);
  if (!cached) return null;
  try {
    const { data, ts } = JSON.parse(cached);
    // Cache expires after 1 hour
    if (Date.now() - ts < 3600 * 1000) return data;
  } catch (e) {}
  return null;
}

function setCachedGear(key, data) {
  localStorage.setItem('gearCache_' + key, JSON.stringify({ data, ts: Date.now() }));
}

// Main fetch function (mocked)
async function fetchGearRecommendations(formData) {
  const key = btoa(JSON.stringify(formData));
  const cached = getCachedGear(key);
  if (cached) return cached;

  // Simulate network delay
  await new Promise(res => setTimeout(res, 1200));

  // Load dummy data
  const resp = await fetch('data/sampleGear.json');
  let gear = await resp.json();

  // Filter by fitness level (simple example)
  if (formData.fitness === 'Beginner') {
    gear = gear.filter(g => g.suitableFor.includes('Beginner'));
  } else if (formData.fitness === 'Intermediate') {
    gear = gear.filter(g => g.suitableFor.includes('Intermediate') || g.suitableFor.includes('Advanced'));
  } else if (formData.fitness === 'Advanced') {
    gear = gear.filter(g => g.suitableFor.includes('Advanced'));
  }

  setCachedGear(key, gear);
  return gear;
}
