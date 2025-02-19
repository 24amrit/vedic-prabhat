const content = [
    {
      id: 1,
      categorie: "normal",
      img: "img/fil4.png",
      title: "How Fresh & Junk Foods Affect Your Health | Vedic Prabhat",
      language: "english",
      topic: "junk",
      type: "video",
      description:
        "In an event hosted by Global Food Regulators Summit in July 2023, Vedic Prabhat offered a profound and unique insight into.",
      date: "Jan, 10, 2025",
    link: "wisdom-subpage.html",
    },
    {
      id: 2,
      categorie: "quote",
      title:
        "Sankirtan leads us slowly but surely. The slow march of the sankirtan slowly but steadily takes us back home, back to Godhead.",
      language: "hindi",
      topic: "something",
      type: "article",
      date: "Jan, 10, 2025",
      link: "https://example.com/health-junk-foods",
    },
    {
      id: 3,
      categorie: "normal",
      img: "img/fil4.png",
      title: "How Fresh & Junk Foods Affect Your Health | Vedic Prabhat",
      language: "telgu",
      topic: "junk",
      type: "podcast",
      description:
        "In an event hosted by Global Food Regulators Summit in July 2023, Vedic Prabhat offered a profound and unique insight into.",
      date: "Jan, 10, 2025",
      link: "wisdom-subpage.html",
    },
    {
      id: 4,
      categorie: "quote",
      title:
        "Living an exuberant life is only possible when you are able to dance upon the uncertainties of life.",
      language: "hindi",
      topic: "yoga",
      type: "article",
      date: "Jan, 10, 2025",
      link: "https://example.com/health-junk-foods",
    },
  
    {
      id: 5,
      categorie: "quote",
      title:
        "Sankirtan leads us slowly but surely. The slow march of the sankirtan slowly but steadily takes us back home, back to Godhead.",
      language: "hindi",
      topic: "yoga",
      type: "article",
      date: "Jan, 10, 2025",
      link: "https://example.com/health-junk-foods",
    },
    {
      id: 6,
      categorie: "normal",
      img: "img/fil4.png",
      title: "How Fresh & Junk Foods Affect Your Health | Vedic Prabhat",
      language: "english",
      topic: "junk",
      type: "video",
      description:
        "In an event hosted by Global Food Regulators Summit in July 2023, Vedic Prabhat offered a profound and unique insight into.",
      date: "Jan, 10, 2025",
      link: "wisdom-subpage.html",
    },
  
    {
      id: 7,
      categorie: "quote",
      title:
        "Living an exuberant life is only possible when you are able to dance upon the uncertainties of life.",
      language: "hindi",
      topic: "something",
      type: "article",
      date: "Jan, 10, 2025",
      link: "https://example.com/health-junk-foods",
    },
    {
      id: 8,
      categorie: "normal",
      img: "img/fil4.png",
      title: "How Fresh & Junk Foods Affect Your Health | Vedic Prabhat",
      language: "telgu",
      topic: "junk",
      type: "podcast",
      description:
        "In an event hosted by Global Food Regulators Summit in July 2023, Vedic Prabhat offered a profound and unique insight into.",
      date: "Jan, 10, 2025",
      link: "wisdom-subpage.html",
    },
  ];
  
  // const filters = {
  //   language: null,
  //   topic: null,
  //   contentType: null,
  //   sortBy: null,
  // };
  
  const cardContainer = document.querySelector(".dom-content");
  const linksEl = document.querySelectorAll(".dropdown-menu li a");
  const selectedFiltersContainer = document.querySelector(".selected-filters"); // UI for showing selected filters
  const clearFiltersBtn = document.querySelector(".clear-filters"); // Button to clear filters
  
  // Store selected filters
  const selectedFilters = {
    language: null, // English is default but should not be displayed in UI
    topic: null,
    type: null,
  };
  
  // Display default data on page load
  window.addEventListener("DOMContentLoaded", () => {
    if (!cardContainer) {
      console.error("Error: cardContainer not found in DOM");
      return;
    }
    filterAndDisplayContent();
  });
  
  // Add click event listener to dropdown links
  linksEl.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent page refresh
  
      // Get the selected value from the data-id attribute
      const selectedValue = e.target.getAttribute("data-id")?.trim().toLowerCase();
      console.log("Selected value:", selectedValue); // Debugging
  
      if (!selectedValue) {
        console.warn("No valid data-id found for filtering.");
        return; // If there's no valid value, exit the function
      }
  
      const parentMenu = e.target.closest(".btn-group"); // Identify which filter (language, topic, type)
      const buttonText = parentMenu.querySelector("button").textContent.trim().toLowerCase();
      console.log("Button text:", buttonText); // Debugging
  
      // Update selected filters based on button text
      if (buttonText.includes("language")) {
        selectedFilters.language = selectedValue; // Update language filter
      } else if (buttonText.includes("topics")) {
        selectedFilters.topic = selectedValue; // Update topic filter
      } else if (buttonText.includes("content type")) {
        selectedFilters.type = selectedValue; // Update content type filter
      }
  
      console.log("Selected Filters after update:", selectedFilters); // Verify filter values
  
      // Update the UI with the selected filters and display the content
      updateSelectedFiltersUI();
      filterAndDisplayContent();
    });
  });
  
  // Function to filter and display content
  function filterAndDisplayContent() {
    // Filter the content based on selected filters
    let filteredContent = content.filter((item) => 
      (selectedFilters.language ? item.language === selectedFilters.language : true) &&
      (selectedFilters.topic ? item.topic === selectedFilters.topic : true) &&
      (selectedFilters.type ? item.type === selectedFilters.type : true)
    );
  
    // Check if filteredContent is empty and update the UI
    if (filteredContent.length === 0) {
      cardContainer.innerHTML = '<p class="no-content-message">No content available</p>';
    } else {
      displayContentData(filteredContent, cardContainer);
    }
  }
  
  // Function to update the selected filters UI
  function updateSelectedFiltersUI() {
    selectedFiltersContainer.innerHTML = ""; // Clear UI
  
    let hasFilters = false;
  
    Object.keys(selectedFilters).forEach((key) => {
      if (selectedFilters[key]) {
        hasFilters = true;
        let filterBadge = document.createElement("span");
        filterBadge.classList.add("filter-badge");
        filterBadge.innerHTML = `${selectedFilters[key]} <i class="fa fa-times remove-filter" data-filter="${key}"></i>`;
        selectedFiltersContainer.appendChild(filterBadge);
      }
    });
  
    // Show/hide "Clear" button and filter container only if a filter is applied
    selectedFiltersContainer.style.display = hasFilters ? "block" : "none";
    clearFiltersBtn.style.display = hasFilters ? "block" : "none";
  
    // Add event listener to remove selected filters
    document.querySelectorAll(".remove-filter").forEach((icon) => {
      icon.addEventListener("click", (e) => {
        const filterKey = e.target.getAttribute("data-filter");
        selectedFilters[filterKey] = null; // Reset filter
        updateSelectedFiltersUI();
        filterAndDisplayContent();
      });
    });
  }
  
  // Add event listener for "Clear" button
  clearFiltersBtn.addEventListener("click", () => {
    selectedFilters.language = null;
    selectedFilters.topic = null;
    selectedFilters.type = null;
    updateSelectedFiltersUI();
    filterAndDisplayContent();
  });
  
  // Function to display content in columns (unchanged)
  function displayContentData(gurus, cardContainer) {
    const columns = [[], [], [], []]; // 4 columns
  
    gurus.forEach((item, index) => {
      const colIndex = index % 4; // Distribute items across 4 columns
      columns[colIndex].push(item);
    });
  
    let displayData = columns
      .map(
        (columnItems, colIndex) => `
        <div class="col-md-6 col-lg-3" id="column${colIndex + 1}">
          ${columnItems
            .map(
              (cat_items, itemIndex) => `
              <div class="f-card ${cat_items.categorie === "quote" ? "f-quote-card" : ""} my-4" id="id${
                colIndex * 2 + itemIndex + 1
              }" data-category="${cat_items.categorie}"> <a href="${cat_items.link}">
                ${cat_items.categorie === "quote" ? `
                  <div class="f-card-content">
                    <span class="quote-icon text-center"><i class="fa-solid fa-quote-left fs-1"></i></span>
                    <h5 class="f-card-title text-center">${cat_items.title}</h5>
                    <div class="f-card-footer">
                      <span class="date">${cat_items.date}</span>
                      <span class="share-icon"><i class="fa-solid fa-share-nodes"></i></span>
                    </div>
                  </div>
                ` : `
                  <div style="position: relative;">
                    <img src="${cat_items.img}" class="f-card-img-top" alt="Card Image">
                    <div class="peach-banner2 p-2">
                      <span class="media-type"><i class="bi bi-play-circle"></i></span>
                      <span class="media-type">${cat_items.type}</span>
                    </div>
                  </div>
                  <div class="f-card-content">
                    <h5 class="f-card-title text-center">${cat_items.title}</h5>
                    <p class="f-card-description text-center">${cat_items.description}</p>
                    <div class="f-card-footer">
                      <span class="date">${cat_items.date}</span>
                      <span class="share-icon"><i class="fa-solid fa-share-nodes"></i></span>
                    </div>
                  </div>
                `}
              </a></div>
            `
            )
            .join("")}
        </div>`
      )
      .join("");
  
    cardContainer.innerHTML = displayData;
  }
  