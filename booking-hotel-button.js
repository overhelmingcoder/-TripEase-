/**
 * Booking.com Hotel Booking Button
 * Standalone JavaScript solution for creating a hotel booking button
 */

// Configuration object - update these values as needed
const searchQuery = {
  destination: '', // Will be populated dynamically or set manually
  checkinDate: '', // Format: YYYY-MM-DD
  checkoutDate: ''  // Format: YYYY-MM-DD
};

/**
 * Format date for Booking.com URL
 * @param {Date|string} date - Date object or date string
 * @returns {Object} Object with year, month, day properties
 */
function formatDateForBooking(date) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return {
    year: dateObj.getFullYear(),
    month: dateObj.getMonth() + 1, // getMonth() returns 0-11, Booking.com expects 1-12
    day: dateObj.getDate()
  };
}

/**
 * Construct Booking.com URL with search parameters
 * @param {string} destination - City or destination name
 * @param {string} checkinDate - Check-in date in YYYY-MM-DD format
 * @param {string} checkoutDate - Check-out date in YYYY-MM-DD format
 * @returns {string|null} Complete Booking.com URL or null if parameters are invalid
 */
function constructBookingUrl(destination, checkinDate, checkoutDate) {
  if (!destination || !checkinDate || !checkoutDate) {
    console.error('Missing required parameters for booking URL');
    return null;
  }

  try {
    const checkin = formatDateForBooking(checkinDate);
    const checkout = formatDateForBooking(checkoutDate);

    const baseUrl = "https://www.booking.com/searchresults.html";
    const params = new URLSearchParams({
      ss: destination,
      checkin_year: checkin.year.toString(),
      checkin_month: checkin.month.toString(),
      checkin_day: checkin.day.toString(),
      checkout_year: checkout.year.toString(),
      checkout_month: checkout.month.toString(),
      checkout_day: checkout.day.toString()
    });

    return `${baseUrl}?${params.toString()}`;
  } catch (error) {
    console.error('Error constructing booking URL:', error);
    return null;
  }
}

/**
 * Handle button click - redirect to Booking.com
 */
function handleBookHotel() {
  // Validate search query
  if (!searchQuery.destination) {
    alert('Please set the destination in the searchQuery object.');
    return;
  }

  if (!searchQuery.checkinDate || !searchQuery.checkoutDate) {
    // Set default dates if not provided
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    searchQuery.checkinDate = today.toISOString().split('T')[0];
    searchQuery.checkoutDate = tomorrow.toISOString().split('T')[0];
  }

  const bookingUrl = constructBookingUrl(
    searchQuery.destination,
    searchQuery.checkinDate,
    searchQuery.checkoutDate
  );

  if (bookingUrl) {
    // Open in new tab
    window.open(bookingUrl, '_blank', 'noopener,noreferrer');
  } else {
    alert('Unable to generate booking URL. Please check your search parameters.');
  }
}

/**
 * Create and return the booking button HTML element
 * @returns {HTMLElement} Button element
 */
function createBookingButton() {
  const button = document.createElement('button');
  button.textContent = 'Book Hotel';
  button.className = 'booking-hotel-btn';
  button.onclick = handleBookHotel;
  
  // Add default styling if no CSS is provided
  button.style.cssText = `
    background-color: #2563eb;
    color: white;
    font-weight: 600;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;
    font-size: 16px;
  `;
  
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#1d4ed8';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#2563eb';
  });
  
  return button;
}

/**
 * Initialize the booking button functionality
 * @param {string} containerId - ID of the container element to append the button to
 * @param {Object} options - Configuration options
 */
function initializeBookingButton(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found`);
    return;
  }

  // Update search query with provided options
  if (options.destination) {
    searchQuery.destination = options.destination;
  }
  if (options.checkinDate) {
    searchQuery.checkinDate = options.checkinDate;
  }
  if (options.checkoutDate) {
    searchQuery.checkoutDate = options.checkoutDate;
  }

  // Create and append button
  const button = createBookingButton();
  container.appendChild(button);
}

// Example usage:
/*
// Method 1: Set search parameters and create button
searchQuery.destination = 'Paris, France';
searchQuery.checkinDate = '2024-03-15';
searchQuery.checkoutDate = '2024-03-18';

// Add button to a container with ID 'booking-container'
initializeBookingButton('booking-container');

// Method 2: Create button with options
initializeBookingButton('booking-container', {
  destination: 'London, UK',
  checkinDate: '2024-03-20',
  checkoutDate: '2024-03-23'
});

// Method 3: Manual button creation
const button = createBookingButton();
document.body.appendChild(button);
*/

// Export functions for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    constructBookingUrl,
    formatDateForBooking,
    handleBookHotel,
    createBookingButton,
    initializeBookingButton,
    searchQuery
  };
}
