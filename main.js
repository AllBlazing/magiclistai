// --- Conditional Dropdown Logic ---
const hasDetails = document.getElementById('has-details');
const detailsFields = document.getElementById('details-fields');
const manualFields = document.getElementById('manual-fields');

hasDetails.addEventListener('change', () => {
  if (hasDetails.value === 'yes') {
    detailsFields.style.display = '';
    manualFields.style.display = 'none';
  } else {
    detailsFields.style.display = 'none';
    manualFields.style.display = '';
  }
});

// --- Paywall Modal Logic ---
const paywallModal = document.getElementById('paywall-modal');
const closeModal = document.getElementById('close-modal');
const upgradeBtn = document.getElementById('upgrade-btn');
const form = document.getElementById('search-form');
const gearList = document.getElementById('gear-list');
const loadingDiv = document.getElementById('loading');

let searchCount = 0;

function showPaywall() {
  paywallModal.style.display = 'flex';
  if (gearList) gearList.style.filter = 'blur(5px)';
}

function hidePaywall() {
  paywallModal.style.display = 'none';
  if (gearList) gearList.style.filter = 'none';
}

closeModal.addEventListener('click', hidePaywall);

upgradeBtn.addEventListener('click', () => {
  alert('Pro plan upgrade coming soon!');
  hidePaywall();
});

// --- Form Submission: Show Paywall After First Search ---
form.addEventListener('submit', function(e) {
  e.preventDefault();
  searchCount++;
  if (searchCount === 1) {
    showPaywall();
  }
  // Add your gear recommendation logic here
  // For now, just show a loading spinner for demo
  if (loadingDiv) {
    loadingDiv.style.display = 'block';
    setTimeout(() => {
      loadingDiv.style.display = 'none';
      gearList.innerHTML = '<div style="color:#E2FE38;text-align:center;">[Demo] Gear recommendations would appear here.</div>';
    }, 1200);
  }
});

// --- Shopping List Share Button (copies list to clipboard) ---
const shareBtn = document.getElementById('share-btn');
const shoppingList = document.getElementById('shopping-list');

shareBtn.addEventListener('click', () => {
  // For demo, just copy the shopping list title
  const text = Array.from(shoppingList.querySelectorAll('li')).map(li => li.textContent).join('\n') || "Your shopping list is empty.";
  navigator.clipboard.writeText(text)
    .then(() => alert('Shopping list copied to clipboard!'))
    .catch(() => alert('Failed to copy list.'));
});

// --- (Optional) Render Shopping List Items ---
// You can expand this section to add/remove items as needed 