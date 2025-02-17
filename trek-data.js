const trekData = [
  {
    id: 1,
    title: "EVEREST BASE CAMP",
    heading: "Everest Base Camp Trek Adventure",
    para: "Conquer the world's roof and witness majestic Himalayan vistas.",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1697729944636-0b630fe30ad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlcmVzdCUyMGJhc2UlMjBjYW1wfGVufDB8fDB8fHww",
    duration: "12 days / 11 nights",
    difficulty: "Challenging",
    ageGroup: "18-55 years",
    altitude: "17,600 ft (5,364m)",
    update: "All permits and guided packages available.",
    amount: "2,62,400",
    summary:
      "Experience the thrill of trekking to the base of the highest mountain in the world, through rugged trails and remote Sherpa villages.",
    content: `
        <p>The Everest Base Camp Trek offers an unforgettable journey into the heart of the Himalayas. Traverse rugged terrain, witness breathtaking views of towering peaks, and immerse yourself in the rich culture of the Sherpa people.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Kathmandu, Nepal</li>
            <li><strong>Ending Point:</strong> Everest Base Camp (EBC)</li>
            <li><strong>Highest Point:</strong> Kala Patthar (5,545m) for panoramic views</li>
            <li><strong>Best Season:</strong> March-April and September-November</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Scenic flight to Lukla</li>
            <li>Trek through lush forests and terraced fields</li>
            <li>Acclimatization days in Namche Bazaar</li>
            <li>Stunning views of Everest, Nuptse, and Lhotse</li>
            <li>Cultural interactions in remote Sherpa villages</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This trek is challenging due to high altitude and variable weather. Proper acclimatization and physical fitness are essential.</p>
        
        <h2>Accommodation</h2>
        <p>Stay in teahouses and lodges offering basic comforts with a taste of local hospitality.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">MAY 01, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Kathmandu</h3>
              <p>Trek briefing and preparation at your hotel.</p>
              <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcT_-2Qq0dViel-uk7pXWQzRQ1r38tk7RmSOT8U1d-Kr5IKC-L9uqyoHzYd730kA6FFtcSCKMyAvmQ02CiW-Y0H_80qdsFaA6ZWuMPp_fQ" alt="Kathmandu" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">MAY 02, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Flight to Lukla & Trek to Phakding</h3>
              <p>Begin your trek along the Dudh Koshi River.</p>
              <img src="https://lh5.googleusercontent.com/p/AF1QipO6rJzu_sBynucwIdHbfHJezErPyAtms_mcIhUS=w675-h390-n-k-no" alt="Trek Start" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 5</h3>
                <span class="date">MAY 05, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival at Namche Bazaar</h3>
              <p>Acclimatize in the bustling Sherpa town.</p>
              <img src="https://lh5.googleusercontent.com/p/AF1QipPnej2Th4kzPYITDTooM-8cJxAr29j_9e-eFO84=w675-h390-n-k-no" alt="Namche Bazaar" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 9</h3>
                <span class="date">MAY 09, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Trek to Kala Patthar</h3>
              <p>Summit trek for breathtaking views of Everest.</p>
              <img src="https://lh5.googleusercontent.com/p/AF1QipM3nq5RSDdQiAZUMKdKcuVdOm6MOgvPh0dJsyi7=w675-h390-n-k-no" alt="Kala Patthar" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 12</h3>
                <span class="date">MAY 12, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Return to Lukla & Flight to Kathmandu</h3>
              <p>Conclude the trek and celebrate your adventure.</p>
              <img src="https://lh5.googleusercontent.com/p/AF1QipNW8-e8qnzHUPvtHX2TfRsXkXr2u3k9CGpow_CN=w675-h390-n-k-no" alt="Return Trek" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 2,
    title: "INCA TRAIL",
    heading: "Inca Trail to Machu Picchu",
    para: "Walk in the footsteps of the Incas to the ancient citadel of Machu Picchu.",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1700166279401-764da6ceba3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5jYSUyMHRyYWlsfGVufDB8fDB8fHww",
    duration: "4 days / 3 nights",
    difficulty: "Moderate to Challenging",
    ageGroup: "16-60 years",
    altitude: "Up to 13,123 ft (4,000m)",
    update: "Limited permits available, book in advance.",
    amount: "90,200",
    summary:
      "Embark on a mystical journey through Inca ruins and lush landscapes, culminating at the awe-inspiring Machu Picchu.",
    content: `
        <p>The Inca Trail is a legendary trek that takes you through diverse Andean landscapes and ancient Incan ruins before reaching the majestic Machu Picchu.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Cusco, Peru</li>
            <li><strong>Ending Point:</strong> Machu Picchu</li>
            <li><strong>Highest Point:</strong> Dead Woman's Pass (4,200m)</li>
            <li><strong>Best Season:</strong> May-September</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Traverse cloud forests and alpine tundra</li>
            <li>Explore ancient Incan ruins along the trail</li>
            <li>Witness dramatic landscapes and panoramic vistas</li>
            <li>Camp under starry Andean skies</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This trek involves steep ascents and high altitudes. Adequate preparation and acclimatization are necessary.</p>
        
        <h2>Accommodation</h2>
        <p>Experience rustic camping along the trail with teahouse accommodations available at the finish.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">JUN 10, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Cusco & Trek Briefing</h3>
              <p>Acclimatize and prepare for the trek.</p>
              <img src="https://www.alpacaexpeditions.com/wp-content/webp-express/webp-images/uploads/Inti-Punku-inca-trail-trek.jpg.webp" alt="Cusco Briefing" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">JUN 11, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Start Trek from Kilometer 82</h3>
              <p>Hike through scenic trails towards Dead Woman's Pass.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlkhKQzbT_8zhWHRky4fEQGA1SGzxSJB4HAehCsw4ArVshBoFKamvATglDnGRkojGrgU&usqp=CAU" alt="Inca Trail Start" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 3</h3>
                <span class="date">JUN 12, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Trek to Wiñay Wayna</h3>
              <p>Explore ancient ruins and enjoy breathtaking vistas.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NhkfrCIy_6udBF0wjdZM1YbT8YYM3RLYo55KPRmlH1d5YJiZwkVH3_miQhyUkiE9gRA&usqp=CAU" alt="Wiñay Wayna" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 4</h3>
                <span class="date">JUN 13, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival at Machu Picchu</h3>
              <p>Enter the Sun Gate at sunrise and explore the citadel.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2wOi-73IFB7gJxXEWcjAEgZQxOAbIGxKiMYGCzjkoK0x1ppsxOeuWeEDXlQhrzKP1Ps&usqp=CAU" alt="Machu Picchu" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 3,
    title: "KILIMANJARO",
    heading: "Kilimanjaro Climb Experience",
    para: "Conquer Africa's highest peak on a journey through diverse ecosystems.",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2lsaW1hbmphcm98ZW58MHx8MHx8fDA%3D",
    duration: "7 days / 6 nights",
    difficulty: "Challenging",
    ageGroup: "18-60 years",
    altitude: "19,341 ft (5,895m)",
    update: "Complete gear and permit packages provided.",
    amount: "2,05,000",
    summary:
      "Experience the thrill of ascending Africa's highest peak with breathtaking landscapes and unforgettable challenges.",
    content: `
        <p>Climbing Mount Kilimanjaro is a once-in-a-lifetime adventure that takes you through multiple climate zones culminating in the ascent of Uhuru Peak, Africa's highest point.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Machame Gate (1,640m)</li>
            <li><strong>Highest Point:</strong> Uhuru Peak (5,895m)</li>
            <li><strong>Route:</strong> Machame Route</li>
            <li><strong>Best Season:</strong> January-March and June-October</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Ascend through lush rainforests and alpine deserts</li>
            <li>Experience breathtaking views from the Rift Valley</li>
            <li>Camp at scenic viewpoints for acclimatization</li>
            <li>Summit attempt under starlit skies</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This challenging trek requires excellent physical condition and proper acclimatization to high altitudes.</p>
        
        <h2>Cultural Experience</h2>
        <p>Interact with local guides and porters to learn about the rich culture of the Chagga people.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">JUL 05, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Moshi & Briefing at Machame Gate</h3>
              <p>Get prepared for the ascent with a comprehensive briefing.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBaaFdQiJ2oo3kNETFGA67p1OQrZLLULy3Mg&s" alt="Moshi Briefing" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">JUL 06, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Trek from Machame Gate to Machame Camp</h3>
              <p>Begin your ascent with scenic trails and diverse landscapes.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZwfH5mqb1Iw5v7keCDsqom6rRToCDUk6XcnK0R9QjfXFpmECq4cZZraJMU49u3xo7J4&usqp=CAU" alt="Machame Camp" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 3</h3>
                <span class="date">JUL 07, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Ascend to Shira Plateau</h3>
              <p>Acclimatize at the stunning Shira Plateau with breathtaking views.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQoYswV0tq_N-NV0PjmMnFSMyOtQvD6APOWoJvJNL_kY9DcKbqbFE2ca4SwJ2yDLxkZ4&usqp=CAU" alt="Shira Plateau" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 4</h3>
                <span class="date">JUL 08, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Reach Barafu Camp</h3>
              <p>Prepare for the final summit push from the high-altitude camp.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQislsfYXMTYw4DYKJjVVJylieRc7MPdLG_LX03UQBYcQOlWYSsse6uRtkaSJYB8UAhMi0&usqp=CAU" alt="Barafu Camp" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 5</h3>
                <span class="date">JUL 09, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Summit Uhuru Peak & Begin Descent</h3>
              <p>Climb to Africa's highest point and start the journey back.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuavb7-QtscIy7viLkg6qlvS5IlTMUWtaStKIxX4tys2X2QZoO3SdS38gJlqBb4IjrgU0&usqp=CAU" alt="Uhuru Peak" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 4,
    title: "ANNAPURNA CIRCUIT",
    heading: "Annapurna Circuit Expedition",
    para: "Embark on a journey through diverse landscapes and rich cultures in the Himalayas.",
    backgroundImage:
      "https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VG9ycmVzJTIwZGVsJTIwUGFpbmUlMjBXJTIwVHJla3xlbnwwfHwwfHx8MA%3D%3D",
    duration: "15 days / 14 nights",
    difficulty: "Moderate to Challenging",
    ageGroup: "18-60 years",
    altitude: "17,769 ft (5,416m) at Thorong La Pass",
    update: "Cultural tours and local homestays included.",
    amount: "1,47,600",
    summary:
      "Traverse the diverse terrains of the Annapurna Circuit, from subtropical forests to high mountain passes, enriched by cultural encounters.",
    content: `
        <p>The Annapurna Circuit is a renowned trek that offers a captivating blend of natural beauty and cultural richness. Traverse through lush valleys, rugged mountains, and ancient villages while experiencing the best of the Himalayas.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Besisahar (760m)</li>
            <li><strong>Highest Point:</strong> Thorong La Pass (5,416m)</li>
            <li><strong>Ending Point:</strong> Nayapul</li>
            <li><strong>Best Season:</strong> October-November and March-May</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Cross the challenging Thorong La Pass</li>
            <li>Explore ancient monasteries and local villages</li>
            <li>Marvel at panoramic views of Annapurna and Dhaulagiri</li>
            <li>Relax in natural hot springs at Tatopani</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This trek is physically demanding with steep ascents and long hiking days. Adequate fitness and acclimatization are essential.</p>
        
        <h2>Cultural Experience</h2>
        <p>Immerse yourself in the local culture with visits to traditional Gurung and Thakali communities.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">SEP 01, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Kathmandu & Trek Briefing</h3>
              <p>Meet your guides and prepare for the adventure.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3HxvdfR0-RLXl92eL4ijIBbIRPTTDOLwuQ&s" alt="Kathmandu Briefing" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">SEP 02, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Drive to Besisahar & Begin Trek</h3>
              <p>Travel to the starting point and start your trek.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wON6K2FEe6ubnlKtNnf3x8O5y_XF9QMnul9Foa1kz7HRoW-7EWlwHMP3TCYoXPNLiHs&usqp=CAU" alt="Besisahar" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 5</h3>
                <span class="date">SEP 05, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Reach High Camps near Thorong La</h3>
              <p>Acclimatize at camps set near the highest pass.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh1_iBwiaYdpHdnge4HqYdhbJPSpP8MbrFsu2Q3n3qaKX8qj6Ep4M5akkKSO1zsJPpvdQ&usqp=CAU" alt="Thorong La" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 10</h3>
                <span class="date">SEP 10, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Cross Thorong La Pass</h3>
              <p>Experience the pinnacle of your trek with breathtaking views.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjApBvXHzBHAzPBJlYMwYs1H2SQpOAbMC_1c5f3yE4NdAdA0OCtEplbDEbAUg9vkNZGI&usqp=CAU" alt="Crossing Pass" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 15</h3>
                <span class="date">SEP 15, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Finish at Nayapul & Return to Kathmandu</h3>
              <p>Complete the trek and enjoy a farewell dinner.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQllGhlTJMEGt7q-C1Pv-qgyiQHFn0flwMT8v6v6buvkkXU4huvLeq5tu7G6jKFOu_MBDg&usqp=CAU" alt="Nayapul Finish" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 5,
    title: "TORRES DEL PAINE W TREK",
    heading: "Torres del Paine W Trek Adventure",
    para: "Discover the rugged beauty of Patagonia on the iconic W trek.",
    backgroundImage:
      "https://media.istockphoto.com/id/2181954894/photo/hiking-the-w-trek-in-torres-del-paine.webp?a=1&b=1&s=612x612&w=0&k=20&c=22W-4Mn0b5UkDqRi1r83WNNILVSUlRhGU6a0SrTEyb4=",
    duration: "7 days / 6 nights",
    difficulty: "Moderate",
    ageGroup: "20-60 years",
    altitude: "Up to 2,500 m (8,200 ft) in some areas",
    update: "Eco-lodge and camping options available.",
    amount: "1,80,400",
    summary:
      "Experience the dramatic landscapes of Patagonia, from towering granite peaks to turquoise lakes, on the famed W Trek.",
    content: `
        <p>The Torres del Paine W Trek offers an immersive adventure into the heart of Patagonia. Walk amidst dramatic mountain landscapes, glacial lakes, and lush valleys while encountering unique flora and fauna.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Puerto Natales, Chile</li>
            <li><strong>Highest Point:</strong> Mirador Las Torres (approx. 900m)</li>
            <li><strong>Best Season:</strong> November to March</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Hike to the base of the Torres del Paine</li>
            <li>Visit the French Valley and witness hanging glaciers</li>
            <li>Enjoy panoramic views at Grey Glacier viewpoint</li>
            <li>Experience the raw beauty of Patagonian wilderness</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This moderate trek involves long days of hiking over varied terrain. Good physical fitness and proper gear are essential.</p>
        
        <h2>Accommodation</h2>
        <p>Choose from a mix of camping under the stars or staying in eco-lodges along the trail.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">DEC 01, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Puerto Natales & Trek Briefing</h3>
              <p>Get acquainted with the trail and local guides.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRREPz5TmikLbbxeJ6BlbVo-j0z__CkrcGiA&s" alt="Puerto Natales" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">DEC 02, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Begin Trek from Puerto Natales</h3>
              <p>Set off towards Torres Camp through rugged landscapes.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDW-KDWywp_BP86bmZ4To7LbFBPzR203dM7Xf6XDR5CI5XERnerhlGHGkmvcdPpZb9l-s&usqp=CAU" alt="Trek Start" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 3</h3>
                <span class="date">DEC 03, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Hike to French Valley</h3>
              <p>Encounter dramatic glacial views and lush valleys.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2xBm59bcnhMP2pO6djOhvnj-7rU2boMDETHNfdEDa3W0LNO21nUgLdTjpownqmS2ioU&usqp=CAU" alt="French Valley" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 5</h3>
                <span class="date">DEC 05, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Visit Grey Glacier</h3>
              <p>Marvel at the immense glacial landscape and blue ice formations.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BF2Vq8KYkYMJmwQO-PEaeqW3_pzK_KDqitETuqDc8C7nezn3pU5dw2oeGYW3BxzAq5I&usqp=CAU" alt="Grey Glacier" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 7</h3>
                <span class="date">DEC 07, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Return Trek & Departure</h3>
              <p>Complete the trek and return to Puerto Natales.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6MP8oFvF6mppZd_UUykXoMqzoKPiKxpNYadbzasbfqZrCc3VYg62wNl8QkM3WTGq5Wg&usqp=CAU" alt="Return Trek" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 6,
    title: "MONT BLANC CIRCUIT",
    heading: "Mont Blanc Circuit Adventure",
    para: "Circle the mighty Mont Blanc massif across three countries.",
    backgroundImage:
      "https://media.istockphoto.com/id/103743142/photo/hiker-viewing-waterfall-on-mont-blanc-circuit.webp?a=1&b=1&s=612x612&w=0&k=20&c=KE6Yapwk9tPQSPylCjpvJ8U1q8-bLcgHCoi7HDyrJRo=",
    duration: "11 days / 10 nights",
    difficulty: "Moderate to Challenging",
    ageGroup: "20-60 years",
    altitude: "8,740 ft (2,665m) at highest point",
    update: "Multi-country trek with comprehensive support.",
    amount: "3,28,000",
    summary:
      "Embark on a grand journey around the Mont Blanc massif, traversing France, Italy, and Switzerland with breathtaking alpine views.",
    content: `
        <p>The Mont Blanc Circuit is a classic long-distance trek offering an unparalleled journey through the heart of the Alps. Enjoy stunning vistas of glaciers, alpine meadows, and picturesque villages.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Chamonix, France</li>
            <li><strong>Highest Point:</strong> Fenêtre d'Arpette (2,665m)</li>
            <li><strong>Total Distance:</strong> Approximately 170 km (106 miles)</li>
            <li><strong>Best Season:</strong> Mid-June to mid-September</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Traverse multiple countries and cultures</li>
            <li>Admire panoramic views of Mont Blanc and surrounding peaks</li>
            <li>Explore charming alpine villages</li>
            <li>Option for cable car rides on select stages</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This trek is moderately challenging with long days of hiking over varied terrain. Good fitness and previous trekking experience are recommended.</p>
        
        <h2>Accommodation</h2>
        <p>Stay in a mix of mountain refuges, hotels, and chalets offering local hospitality.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">JUL 15, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Chamonix & Pre-Trek Briefing</h3>
              <p>Meet your team and prepare for the circuit around Mont Blanc.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2biLG9qQcPPG6GhHkSRKCdm4kYjedhRXObg&s" alt="Chamonix Briefing" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 3</h3>
                <span class="date">JUL 17, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Start Circuit & Cross into Italy</h3>
              <p>Begin your trek, experiencing diverse cultures and landscapes.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXSyIVljY6Am5S02KmX6_ubAQ1Kav0hbDym_aKlVzfyJONwVle1NRmeoD1CK9Bem7nbk&usqp=CAU" alt="Crossing Border" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 6</h3>
                <span class="date">JUL 20, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Reach an Alpine Village</h3>
              <p>Enjoy rest and acclimatization in a charming mountain village.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOTjr7Yl3T8L1bBwsTEF9ilpa9VZrcpF333crQLlJzytiyo_CgBkmMVjVELF9S2z5DVKo&usqp=CAU" alt="Alpine Village" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 9</h3>
                <span class="date">JUL 23, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>High Mountain Passes & Glacier Views</h3>
              <p>Experience breathtaking vistas as you traverse challenging passes.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8kUlqSmqQQCFTulPczklUTDE4tWQW7U0cC8FaaczE3Ri26KKyS3llNp1ppPmHtTCIH0&usqp=CAU" alt="Mountain Pass" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 11</h3>
                <span class="date">JUL 25, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Complete Circuit & Return to Chamonix</h3>
              <p>Finish your adventure and celebrate the journey around Mont Blanc.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2mgJuqJfZVwe7hPfpmR6NFk-aZoqfho96a_ST2jM_itQxlZjyWn98zUq1Hmm159ddJw&usqp=CAU" alt="Return to Chamonix" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 7,
    title: "BRAHMATAL TREK",
    heading: "Brahmatal Winter Trek",
    para: "Discover the magic of winter in the Himalayan landscapes of Uttarakhand.",
    backgroundImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYWhtYXRhbCUyMHRyZWt8ZW58MHx8MHx8fDA%3D",
    duration: "6 days / 5 nights",
    difficulty: "Moderate",
    ageGroup: "15-40 years",
    altitude: "12,217 ft (3,730m)",
    update: "Includes homestays and local cuisine tasting.",
    amount: "82,000",
    summary:
      "A mesmerizing winter trek offering pristine views of snow-covered peaks and frozen lakes in the Indian Himalayas.",
    content: `
        <p>The Brahmatal Trek is a stunning winter journey in Uttarakhand, offering mesmerizing views of snow-clad mountains and an unforgettable experience amidst pristine Himalayan landscapes.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Lohajung, Uttarakhand</li>
            <li><strong>Highest Point:</strong> Brahmatal Summit (3,730m)</li>
            <li><strong>Total Distance:</strong> Approximately 24 km (15 miles)</li>
            <li><strong>Best Season:</strong> December to March</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Trek through dense oak and rhododendron forests blanketed in snow</li>
            <li>Enjoy panoramic views of Himalayan giants like Mt. Trishul and Nanda Ghunti</li>
            <li>Camp beside the mystical, frozen Brahmatal Lake</li>
            <li>Experience serene alpine meadows and crisp winter air</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This trek is moderately challenging with gradual ascents, suitable for beginners with good fitness levels.</p>
        
        <h2>Accommodation</h2>
        <p>Stay in a mix of campsites and local homestays offering a blend of rustic charm and comfort.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">DEC 05, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival at Lohajung & Trek Briefing</h3>
              <p>Begin your journey with a detailed briefing and local introduction.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFa00I6RqIc6tOHXnLcj_k9MBBojZ7wbCOSQ&s" alt="Lohajung Arrival" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">DEC 06, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Trek to Base Camp</h3>
              <p>Set out on a scenic trek through snowy trails to the base camp.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZt6SV86UJymOUD6ZRnM65cqekL1vcEugvxV8v2Cgj8sCcAz37qmmI3pE0ypIexsxWzM8&usqp=CAU" alt="Base Camp" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 3</h3>
                <span class="date">DEC 07, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Reach Brahmatal Summit</h3>
              <p>Ascend to the summit for panoramic views of the snow-clad peaks.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XM-nH2BIjcqHtWnK4KIeIcTcg4rd75hqf0tCRWeH8NZs5vOFrsUUCRz9vOWKr-47eNI&usqp=CAU" alt="Brahmatal Summit" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 4</h3>
                <span class="date">DEC 08, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Descent & Village Exploration</h3>
              <p>Begin your descent and explore local Himalayan villages.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRe1mBGR_8tm1QX9Ej2o0oZ_IoKsl1a2QTfnNs1HWvMvtnDrmCxunOverUYJzkdHLdzk&usqp=CAU" alt="Village Exploration" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 6</h3>
                <span class="date">DEC 10, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Return & Departure</h3>
              <p>Conclude the trek and return to Lohajung for departure.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLsQ_aXkdasXXR8Dl_pquSKRZLtDQQkX7JSYiLTbrB60T16h1qwmPnkmnY_wXq6IPDvE&usqp=CAU" alt="Departure" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 8,
    title: "DALHOUSIE TREK",
    heading: "Dalhousie Hill Trek",
    para: "A scenic trek through verdant hills and colonial charm in Himachal Pradesh.",
    backgroundImage:
      "https://images.unsplash.com/photo-1580633268691-192c868c83eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFsaG91c2llfGVufDB8fDB8fHww",
    duration: "4 days / 3 nights",
    difficulty: "Easy to Moderate",
    ageGroup: "15-50 years",
    altitude: "9,022 ft (2,755m)",
    update: "Comfortable accommodations and guided local tours included.",
    amount: "49,200",
    summary:
      "Experience the tranquility and scenic beauty of the Dalhousie region with a trek that offers panoramic hill views and lush landscapes.",
    content: `
        <p>The Dalhousie Trek is a short yet captivating journey through rolling hills, dense forests, and charming colonial-era hill stations in Himachal Pradesh.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Dalhousie, Himachal Pradesh</li>
            <li><strong>Highest Point:</strong> Dainkund Peak (2,755m)</li>
            <li><strong>Total Distance:</strong> Approximately 15 km (9 miles)</li>
            <li><strong>Best Season:</strong> March to June & September to November</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Trek through scenic pine and oak forests</li>
            <li>Visit the charming town of Khajjiar, the 'Mini Switzerland of India'</li>
            <li>Enjoy breathtaking hilltop views at Dainkund Peak</li>
            <li>Relax in the cool, refreshing mountain air</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This trek is relatively easy with gentle ascents, making it ideal for beginners and families.</p>
        
        <h2>Accommodation</h2>
        <p>Enjoy stays in comfortable hotels and homestays that offer local flavors and scenic views.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">APR 10, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Dalhousie & Trek Briefing</h3>
              <p>Meet your local guide and prepare for the trek.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/13d984b5-edb8-4cff-92fd-e1b833000a7a" alt="Dalhousie Arrival" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">APR 11, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Trek to Dainkund Peak & Explore Khajjiar</h3>
              <p>Enjoy scenic views and the beauty of nature.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/5a79139d-d4b3-4ed3-bd63-e33bf3874997" alt="Dainkund Peak" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 3</h3>
                <span class="date">APR 12, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Scenic Hike Through Forest Trails</h3>
              <p>Explore the lush greenery and local flora.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/7f3e07de-b872-4395-a772-22082f5e7644" alt="Forest Trail" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 4</h3>
                <span class="date">APR 13, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Return Trek & Departure</h3>
              <p>Conclude the trek and depart from Dalhousie.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:500/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/attraction/de2874d5-0a8e-45da-a431-3e7837fe36da" alt="Departure" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 9,
    title: "KASHMIR GREAT LAKES TREK",
    heading: "Kashmir Great Lakes Expedition",
    para: "Journey through a mesmerizing landscape of alpine lakes and rugged mountains in Kashmir.",
    backgroundImage:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D",
    duration: "8 days / 7 nights",
    difficulty: "Moderate to Challenging",
    ageGroup: "18-50 years",
    altitude: "13,780 ft (4,200m) at Gadsar Pass",
    update: "All logistics, camping, and meals included.",
    amount: "1,23,000",
    summary:
      "Trek through the pristine wilderness of Kashmir, discovering a series of stunning alpine lakes and rugged landscapes.",
    content: `
        <p>The Kashmir Great Lakes Trek is an extraordinary journey through the untouched beauty of the Kashmiri highlands, featuring a series of crystal-clear lakes and expansive meadows.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Sonamarg, Jammu & Kashmir</li>
            <li><strong>Highest Point:</strong> Gadsar Pass (4,200m)</li>
            <li><strong>Total Distance:</strong> Approximately 75 km (47 miles)</li>
            <li><strong>Best Season:</strong> July to September</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Traverse through lush meadows and rugged mountain trails</li>
            <li>Admire the beauty of high-altitude lakes like Vishansar and Krishansar</li>
            <li>Experience the serene ambiance of remote alpine landscapes</li>
            <li>Camp under starry skies in the wilderness</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This trek requires good stamina due to steep ascents and long days of hiking. Prior trekking experience is recommended.</p>
        
        <h2>Accommodation</h2>
        <p>Stay in comfortable campsites with all necessary amenities amidst breathtaking natural surroundings.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">AUG 15, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Sonamarg & Trek Briefing</h3>
              <p>Begin your journey in the scenic valleys of Kashmir.</p>
              <img src="https://trekthehimalayas.com/images/HomePageImages/Desktop/492f0cc0-f525-4a2e-883a-2705e7834f41_Kashmir-Great-Lake-Day-3.webp" alt="Sonamarg" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">AUG 16, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Begin Trek Towards Alpine Lakes</h3>
              <p>Trek through lush valleys and witness serene landscapes.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWCJ5eJbFUDbXrw6VBaJDorLjU7sJDppAovg5ztATJdn4xXjpiXUhrDxfuMYKbZH50PE&usqp=CAU" alt="Alpine Lakes" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 4</h3>
                <span class="date">AUG 18, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Reach High-Altitude Camps</h3>
              <p>Set up camp near Gadsar Pass and enjoy panoramic views.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbi2PqmLLQrGlxThfJ58uYrCxMUfwi13_6q-q4nGp_mGy6dG6kfjFinll3_r3GF2EAx_o&usqp=CAU" alt="High Camp" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 6</h3>
                <span class="date">AUG 20, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Experience Alpine Serenity</h3>
              <p>Enjoy the tranquility of pristine lakes and local wildlife.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB2ZUmyutX7MuZmFCevhRQGTLj_Kw_lduW2bR3U0kVtFtrLyWt12yNZ0PaS_cyoCvVQdQ&usqp=CAU" alt="Serene Lake" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 8</h3>
                <span class="date">AUG 22, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Return Trek & Conclusion</h3>
              <p>Finish the trek and return to the starting point.</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9VmgBIBKxDySuNu5KcACinCK8l4NGZfj5s8juR9D6fecf5zwAGBa8cRk_Ls6PYmvP0I&usqp=CAU" alt="Return Trek" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 10,
    title: "KASOL & MANALI TREK",
    heading: "Kasol & Manali Valley Trek",
    para: "Explore the lush landscapes of the Parvati Valley with vibrant cultural experiences.",
    backgroundImage:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWxpfGVufDB8fDB8fHww",
    duration: "5 days / 4 nights",
    difficulty: "Easy to Moderate",
    ageGroup: "15-40 years",
    altitude: "9,700 ft (2,960m)",
    update: "Includes local homestays and campfire evenings.",
    amount: "57,400",
    summary:
      "A delightful trek through the scenic Parvati Valley, featuring river crossings, forest trails, and charming villages.",
    content: `
        <p>The Kasol & Manali Trek offers a perfect blend of adventure and relaxation. Journey through lush forests, along gushing rivers, and experience the vibrant culture of the Parvati Valley.</p>
        
        <h2>Trek Overview</h2>
        <ul>
            <li><strong>Starting Point:</strong> Kasol, Himachal Pradesh</li>
            <li><strong>Highest Point:</strong> Kheerganga (2,960m)</li>
            <li><strong>Total Distance:</strong> Approximately 30 km (18 miles)</li>
            <li><strong>Best Season:</strong> April to June & September to November</li>
        </ul>
        
        <h2>Itinerary Highlights</h2>
        <ul>
            <li>Enjoy serene walks along the Parvati River</li>
            <li>Experience vibrant local culture and cuisine</li>
            <li>Trek through lush forests and quaint villages</li>
            <li>Relax in natural hot springs at Kheerganga</li>
        </ul>
        
        <h2>Physical Demands</h2>
        <p>This trek is easy to moderate, making it accessible for beginners and families alike.</p>
        
        <h2>Accommodation</h2>
        <p>Stay in riverside camps, cozy homestays, and local guesthouses for a comfortable retreat.</p>
      `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">MAR 05, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival in Kasol & Trek Briefing</h3>
              <p>Get ready for a scenic journey through the Parvati Valley.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/ae652518-4bd8-4473-99d3-631cf920ebf6" alt="Kasol Arrival" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">MAR 06, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Trek Through Parvati Valley</h3>
              <p>Hike along the river and enjoy lush forest trails.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/3ce6a404-2679-4ca8-a03d-f945d59d3fb8" alt="Parvati Valley" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 3</h3>
                <span class="date">MAR 07, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Arrival at Kheerganga</h3>
              <p>Relax and rejuvenate in the serene ambiance with natural hot springs.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:500/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/attraction/ccb700ab-cf59-409f-b88b-72900264fcec" alt="Kheerganga" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 4</h3>
                <span class="date">MAR 08, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Explore Local Villages & Begin Return Trek</h3>
              <p>Discover local culture as you start your descent.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/29e06624-5712-4930-9bdd-095e00fedb10" alt="Village Exploration" class="day-image"/>
            </div>
          </div>
        
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 5</h3>
                <span class="date">MAR 09, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Conclude Trek & Departure</h3>
              <p>Wrap up the trek with a farewell and head back home.</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/9711c81a-3040-43db-a57b-d2c721ae71c2" alt="Departure" class="day-image"/>
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 11,
    title: "KEDARKANTHA",
    heading: "Kedarkantha Snow Trek",
    para: "The most popular Winter Trek of India",
    backgroundImage:
      "https://images.unsplash.com/photo-1673356728302-0905d20cf836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VkYXIlMjBrYW50aGF8ZW58MHx8MHx8fDA%3D",
    duration: "5 days / 4 nights",
    difficulty: "Moderate",
    ageGroup: "15-35 years",
    altitude: "12,500 ft",
    update: "We are also providing Flight Bookings.",
    amount: "8,700",
    summary:
      "A classic winter trek in the Indian Himalayas, known for its spectacular summit climb and stunning sunrise views.",
    content: `
            <p>The Kedarkantha Trek is one of the most popular winter treks in India, offering an exhilarating summit climb with breathtaking panoramic views of the snow-clad Himalayas.</p>

            <h2>Trek Overview</h2>
            <ul>
                <li><strong>Starting/Ending Point:</strong> Sankri, Uttarakhand</li>
                <li><strong>Highest Point:</strong> Kedarkantha Summit (3,810m)</li>
                <li><strong>Total Distance:</strong> Approximately 20 km (12 miles)</li>
                <li><strong>Best Season:</strong> December to April</li>
            </ul>

            <h2>Itinerary Highlights</h2>
            <ul>
                <li>Summit climb with a 360-degree view of Himalayan peaks</li>
                <li>Walk through enchanting pine and oak forests</li>
                <li>Experience deep snow and picturesque campsites</li>
                <li>Ideal trek for beginners looking for a winter adventure</li>
            </ul>

            <h2>Physical Demands</h2>
            <p>Moderate difficulty with gradual ascents, making it suitable for first-time trekkers.</p>

            <h2>Accommodation</h2>
            <p>Campsites with stunning mountain views provide a true Himalayan experience.</p>
        `,
    timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 1</h3>
                <span class="date">FEB 18, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Depart for Sankri from Haridwar</h3>
              <p>Arrival at BaseCamp, Acclimatisation & Night Stay</p>
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Day 1 Base Camp"
                class="day-image"
              />
            </div>
          </div>

          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 2</h3>
                <span class="date">FEB 19, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Trek to Juda ka Taal</h3>
              <p>Night stay at Jaynala Campsite</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/package/a980857c-2a4f-46a6-b1cf-25e4c7cfa24c" alt="" class="day-image">
            </div>
          </div>

          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 3</h3>
                <span class="date">FEB 20, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Summit Day - Kedarkantha Peak</h3>
              <p>Early morning summit climb and return to base camp</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/package/a48f414b-77ff-436b-9315-f538f0597811" alt="" class="day-image">
            </div>
          </div>

          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 4</h3>
                <span class="date">FEB 21, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Descent to Sankri</h3>
              <p>Trek back to Sankri village and celebration dinner</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/0b72d9e8-bcd6-4802-9bf7-b82bbc29165e" alt="" class="day-image">
            </div>
          </div>

          <div class="timeline-item">
            <div class="day-marker">
              <span class="dot"></span>
              <div class="day-info">
                <h3>DAY 5</h3>
                <span class="date">FEB 22, 2025</span>
              </div>
            </div>
            <div class="day-content">
              <h3>Return to Haridwar</h3>
              <p>Drive back to Haridwar and departure</p>
              <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/5c0362b6-16d9-423f-bfc0-b3a89c78ec3a" alt="" class="day-image">
            </div>
          </div>
        </div>
      `,
  },
  {
    id: 12,
    title: "JAISALMER DESERT TREK",
    heading: "Jaisalmer Desert Trek Experience",
    para: "Embark on an adventurous journey across the golden dunes of the Thar Desert in Rajasthan.",
    backgroundImage:
      "https://media.istockphoto.com/id/942152278/photo/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-and-archaeological-ruins.webp?a=1&b=1&s=612x612&w=0&k=20&c=G-J9Za6tXae7ObbVL7T8015zlI-FeEyQ8_Du-7pVIT8=",
    duration: "3 days / 2 nights",
    difficulty: "Easy",
    ageGroup: "15-50 years",
    altitude: "Approx. 740 ft (225m)",
    update: "All permits included with guided cultural excursions.",
    amount: "12,000",
    summary:
      "Experience a unique desert trek through the golden sands of Jaisalmer, blending adventure with Rajasthan’s rich heritage.",
    content: `
      <p>The Jaisalmer Desert Trek offers a distinctive adventure across the vast Thar Desert. Experience camel safaris, dune hiking, and immersive cultural encounters in the heart of Rajasthan.</p>
      
      <h2>Trek Overview</h2>
      <ul>
          <li><strong>Starting Point:</strong> Jaisalmer, Rajasthan</li>
          <li><strong>Route:</strong> Desert trails and sand dunes</li>
          <li><strong>Key Attractions:</strong> Jaisalmer Fort, Sam Sand Dunes</li>
          <li><strong>Best Season:</strong> October to March</li>
      </ul>
      
      <h2>Itinerary Highlights</h2>
      <ul>
          <li>Begin with a cultural briefing in Jaisalmer</li>
          <li>Enjoy a camel safari and sunset over the dunes</li>
          <li>Explore the historic Jaisalmer Fort and local havelis</li>
          <li>Experience traditional Rajasthani folk music and dance</li>
      </ul>
      
      <h2>Physical Demands</h2>
      <p>This trek is gentle and suitable for all ages, with moderate walking on sandy terrain.</p>
      
      <h2>Accommodation</h2>
      <p>Stay in desert camps or heritage hotels that offer an authentic Rajasthani experience.</p>
    `,
    timeline: `
      <div class="timeline">
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 1</h3>
              <span class="date">OCT 05, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Arrival in Jaisalmer & Briefing</h3>
            <p>Arrive in Jaisalmer, check in at your hotel, and attend a detailed trek briefing.</p>
            <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/342b06cd-06a2-4e4b-ac93-22cc90319323" alt="Jaisalmer Arrival" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 2</h3>
              <span class="date">OCT 06, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Camel Safari & Dune Hike</h3>
            <p>Embark on a camel safari, followed by a hike across the golden dunes, and enjoy a stunning sunset.</p>
            <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:1000/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/trek/7bb9fc53-e89c-4978-9520-c7faca32edae" alt="Camel Safari" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 3</h3>
              <span class="date">OCT 07, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Cultural Tour & Departure</h3>
            <p>Visit the historic Jaisalmer Fort and local markets before departing in the afternoon.</p>
            <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/e3cfa85d-a689-4d56-bc10-000630725e5d" alt="Jaisalmer Fort" class="day-image"/>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 13,
    title: "MACHU PICCHU TREK",
    heading: "Machu Picchu Trek Adventure",
    para: "Follow ancient Incan trails to reach the mystical citadel of Machu Picchu.",
    backgroundImage:
      "https://images.unsplash.com/photo-1620768237794-f3bfe964f9f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1hY2h1JTIwUGljY2h1fGVufDB8fDB8fHww",
    duration: "4 days / 3 nights",
    difficulty: "Moderate to Challenging",
    ageGroup: "18-60 years",
    altitude: "Up to 13,123 ft (4,000m)",
    update: "All permits and guided packages included.",
    amount: "80,000",
    summary:
      "Embark on a legendary trek through the Andes, following ancient Incan paths that lead to the awe-inspiring Machu Picchu.",
    content: `
      <p>The Machu Picchu Trek offers an unforgettable journey through the Andean highlands. Hike through cloud forests, cross ancient Incan trails, and witness breathtaking views as you approach the iconic citadel.</p>
      
      <h2>Trek Overview</h2>
      <ul>
          <li><strong>Starting Point:</strong> Cusco, Peru</li>
          <li><strong>Ending Point:</strong> Machu Picchu</li>
          <li><strong>Highest Point:</strong> Dead Woman's Pass (4,200m)</li>
          <li><strong>Best Season:</strong> May to September</li>
      </ul>
      
      <h2>Itinerary Highlights</h2>
      <ul>
          <li>Acclimatize in Cusco before the trek</li>
          <li>Traverse ancient Incan trails and cloud forests</li>
          <li>Visit key ruins such as Wiñay Wayna</li>
          <li>Experience a sunrise view over Machu Picchu from the Sun Gate</li>
      </ul>
      
      <h2>Physical Demands</h2>
      <p>This trek involves steep ascents and high altitudes. Proper acclimatization and physical preparation are essential.</p>
      
      <h2>Accommodation</h2>
      <p>Stay in comfortable campsites along the trail with teahouse accommodations available at the finish.</p>
    `,
    timeline: `
      <div class="timeline">
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 1</h3>
              <span class="date">NOV 10, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Arrival in Cusco & Trek Briefing</h3>
            <p>Settle in Cusco, attend a detailed trek briefing, and begin acclimatization.</p>
            <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/033f8f04-b322-4f22-8833-eca20172ea00" alt="Cusco Briefing" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 2</h3>
              <span class="date">NOV 11, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Start Trek from Kilometer 82</h3>
            <p>Begin the trek on ancient Incan trails with breathtaking Andean vistas.</p>
            <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:600/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/schedule/cddafc8b-369d-4dc1-866d-f3263734af66" alt="Inca Trail Start" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 3</h3>
              <span class="date">NOV 12, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Trek to Wiñay Wayna</h3>
            <p>Hike to the ancient ruins of Wiñay Wayna and soak in the Andean ambiance.</p>
            <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:500/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/attraction/f99efdd8-d8b4-4d86-bd83-3736db2bef07" alt="Wiñay Wayna" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 4</h3>
              <span class="date">NOV 13, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Sunrise at Machu Picchu & Return</h3>
            <p>Experience a magical sunrise at Machu Picchu before concluding your trek.</p>
            <img src="https://img.invinciblengo.org/iconscout/f:jpeg/w:500/h:0/rt:fit/plain/https://invincible.s3.wasabisys.com/attraction/1a2bc7d1-83ca-4bd2-944a-88da5495819a" alt="Machu Picchu Sunrise" class="day-image"/>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 14,
    title: "PATAGONIA TREK",
    heading: "Patagonia Wilderness Trek",
    para: "Explore the raw, untouched beauty of Patagonia, where glaciers, rugged peaks, and pristine lakes await.",
    backgroundImage:
      "https://images.unsplash.com/photo-1554173364-083a61887288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFBhdGFnb25pYXxlbnwwfHwwfHx8MA%3D%3D",
    duration: "10 days / 9 nights",
    difficulty: "Moderate to Challenging",
    ageGroup: "20-60 years",
    altitude: "Up to 8,200 ft (2,500m)",
    update: "All-inclusive packages with guided support available.",
    amount: "2,50,000",
    summary:
      "Trek through the wild and remote landscapes of Patagonia, encountering massive glaciers, jagged peaks, and serene lakes on an unforgettable expedition.",
    content: `
      <p>The Patagonia Trek is an immersive adventure into one of the world's last great wildernesses. Traverse through dramatic landscapes, witness the power of nature, and camp under a vast, starry sky in this rugged region.</p>
      
      <h2>Trek Overview</h2>
      <ul>
          <li><strong>Starting Point:</strong> Puerto Natales, Chile</li>
          <li><strong>Route:</strong> Varies across Torres del Paine and surrounding areas</li>
          <li><strong>Key Attractions:</strong> Glaciers, jagged peaks, turquoise lakes</li>
          <li><strong>Best Season:</strong> November to March</li>
      </ul>
      
      <h2>Itinerary Highlights</h2>
      <ul>
          <li>Arrive in Puerto Natales and attend a comprehensive trek briefing</li>
          <li>Begin your journey into the heart of Patagonia with diverse landscapes</li>
          <li>Hike through rugged terrain and visit the famous glaciers</li>
          <li>Experience the pristine beauty of remote alpine lakes</li>
          <li>Conclude with a celebratory return trek and cultural farewell</li>
      </ul>
      
      <h2>Physical Demands</h2>
      <p>This trek is demanding with long days of hiking in variable weather conditions. Good physical fitness and preparation are essential.</p>
      
      <h2>Accommodation</h2>
      <p>Stay in a combination of eco-lodges and wilderness camps that provide both comfort and an authentic Patagonian experience.</p>
    `,
    timeline: `
      <div class="timeline">
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 1</h3>
              <span class="date">SEP 20, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Arrival in Puerto Natales & Trek Briefing</h3>
            <p>Arrive, settle in, and attend a detailed briefing before starting your Patagonian adventure.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnmkV6r6d2Fs3KZXR2xancxNp14YiAx3W6Q&s" alt="Puerto Natales" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 3</h3>
              <span class="date">SEP 22, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Begin Trek into Torres del Paine</h3>
            <p>Set off into the wilderness, traversing varied landscapes as you enter the Torres del Paine region.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_LkaUwfN6M9B7OrusiVzLU3FOZWt2cZRBfpF-lWoZVP8mZqsGwcZ8Yv3PL9D08JkeXI&usqp=CAU" alt="Torres del Paine" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 5</h3>
              <span class="date">SEP 24, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Explore the French Valley</h3>
            <p>Experience the awe-inspiring French Valley with its hanging glaciers and rugged terrain.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZniZc3Ych7N_cNGcHcbOM6CxZG9W0yR3ML4ct1Ldi0dbcgjRxoAuWTNrMu7gx9lWOtC0&usqp=CAU" alt="French Valley" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 8</h3>
              <span class="date">SEP 27, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Trek to Grey Glacier Viewpoint</h3>
            <p>Hike to a stunning viewpoint of the Grey Glacier and capture breathtaking vistas.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWhpVS1Kyvim0otIQwAoxzaBxt6NnNmFieNKIVYuvt71Edx8U9Vpb_ZiKrRKsrSsaWvU&usqp=CAU" alt="Grey Glacier" class="day-image"/>
          </div>
        </div>
      
        <div class="timeline-item">
          <div class="day-marker">
            <span class="dot"></span>
            <div class="day-info">
              <h3>DAY 10</h3>
              <span class="date">SEP 29, 2025</span>
            </div>
          </div>
          <div class="day-content">
            <h3>Return Trek & Departure</h3>
            <p>Complete your trek with a return journey and bid farewell to Patagonia.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3hvBbiXGdS3MNUxCW2f-JAthnJ80-SJj9V2Fy6tdw-Q0o4y0fYwSJus_VrJB9nYb7q0&usqp=CAU" alt="Departure" class="day-image"/>
          </div>
        </div>
      </div>
    `,
  },
];

export default trekData;
