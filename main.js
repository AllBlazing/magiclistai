// --- Paywall Modal Logic ---
const paywallModal = document.getElementById('paywall-modal');
const closeModal = document.getElementById('close-modal');
const upgradeBtn = document.getElementById('upgrade-btn');

// Show paywall after first search
let searchCount = 0;

function showPaywall() {
  paywallModal.style.display = 'flex';
  // Blur gear results
  gearList.style.filter = 'blur(5px)';
}

function hidePaywall() {
  paywallModal.style.display = 'none';
  gearList.style.filter = 'none';
}

closeModal.addEventListener('click', hidePaywall);

upgradeBtn.addEventListener('click', () => {
  // Stub: Redirect to Stripe checkout or show Pro plan UI
  alert('Pro plan upgrade coming soon!');
  hidePaywall();
});

// Update form submission to track search count
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  gearList.innerHTML = '';
  loadingDiv.style.display = 'block';

  // Gather form data
  const data = {
    name: nameInput.value.trim(),
    fitness: fitnessSelect.value,
    url: urlInput.value.trim(),
    manualTime: manualTime.value.trim(),
    gender: genderSelect.value,
    ageGroup: ageGroupSelect.value
  };

  // Call mocked x.ai fetch (liveSearch.js)
  allGear = await fetchGearRecommendations(data);
  loadingDiv.style.display = 'none';

  // Render filter bar
  renderFilterBar(allGear);

  // Render gear cards
  renderGearList(allGear);

  // Track search count and show paywall after first search
  searchCount++;
  if (searchCount === 1) {
    showPaywall();
  }
}); 