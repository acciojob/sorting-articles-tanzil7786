
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Function to strip out certain words from the article names
    function strip(articleName) {
      return articleName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the articles while ignoring certain words
    const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

    // Add each article to the unordered list
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
      const li = document.createElement('li');
      li.textContent = band;
      bandList.appendChild(li);
    });