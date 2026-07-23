// ---- Skills data (grouped for 3 marquee rows) ----
    const skillRows = [
      ["Java", "JavaScript", "TypeScript", "Python", "Kotlin", "Dart", "PHP", "C++", "React.js", "Next.js"],
      ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Microservices", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase"],
      ["React Native", "Flutter", "Android SDK", "AWS", "Azure", "Docker", "Git", "Google Gemini AI", "MQTT", "ESP32"]
    ];

    function buildTrack(id, items) {
      const track = document.getElementById(id);
      const doubled = [...items, ...items]; // duplicate for seamless loop
      track.innerHTML = doubled.map(s => `<div class="chip"><span class="cdot"></span>${s}</div>`).join('');
    }
    buildTrack('track1', skillRows[0]);
    buildTrack('track2', skillRows[1]);
    buildTrack('track3', skillRows[2]);

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.remove('open');
      });
    });

    // ---- Projects data ----
    const projects = [
      { n: "01", name: "PowerLink", sub: "AI-Driven Smart Electricity Monitoring", desc: "AI-powered electricity monitoring platform with IoT appliance monitoring, bill prediction, and energy-saving recommendations.", tags: ["Python", "React Native", "MQTT", "ESP32"], img: "codeEditor.png", ghLink: "" },
      { n: "02", name: "TechnoHub.lk", sub: "Learning Management System", desc: "Built a full-stack e-learning platform featuring courses, quizzes, e-books, secure payments, and role-based dashboards for learners, instructors, and administrators.", tags: ["Next.js", "React", "Node.js", "Express.js", "Prisma ORM", "MySQL", "Tailwind CSS"], img: "technohub-dashboard.png", ghLink: "" },
      { n: "03", name: "Aura", sub: "Greenhouse AI Monitoring System", desc: "Developed an intelligent IoT-based greenhouse monitoring system that collects real-time environmental data using sensors and analyzes it using Google Gemini AI.", tags: ["ESP32", "Gemini AI", "MQTT", "TFT Display"], img: "aura.png", ghLink: "https://github.com/ChaminduWn/Aura" },
      { n: "04", name: "LibraCore", sub: "Library Management System", desc: "Developed a comprehensive library management platform supporting book inventory management, lending and borrowing operations, user management, and rental management.", tags: ["Spring Boot", "Next.js", "MySQL", "Tailwind CSS"], img: "libracore.png", ghFrontend: "https://github.com/ChaminduWn/library_management_system_frontend", ghBackend: "https://github.com/ChaminduWn/library_management_system_backend" },
      { n: "05", name: "CJ Gym & Fitness", sub: "Gym Management System", desc: "MERN stack application that streamlines gym operations by managing members, schedules, staff, subscriptions, finances, inventory, and supplements, with coaching support.", tags: ["MERN", "Tailwind CSS", "Redux", "Firebase", "Material UI"], img: "gym.png", ghLink: "https://github.com/inupaUdara/gym-management-system" },
      { n: "06", name: "Note App", sub: "Android Productivity App", desc: "Android application built with Kotlin that helps users manage tasks, reminders, and notifications, including a Pomodoro focus timer.", tags: ["Kotlin", "Android SDK", "SharedPreferences", "AlarmManager"], img: "noteapp.png", ghLink: "https://github.com/ChaminduWn/Note-App" },
      { n: "07", name: "Event.lk", sub: "Online Event Management Platform", desc: "Online event management platform for businesses, following MVC architecture. Allows users to register, create events, and browse listings.", tags: ["Java", "JSP/Servlets", "Tomcat", "MySQL", "MVC"], img: "event.png", ghLink: "https://github.com/ChaminduWn/Event.lk" },
      { n: "08", name: "BizzSup", sub: "Online Customer Support System", desc: "Online customer support platform featuring dynamic interactions, built with a clean PHP backend for businesses to manage customer inquiries efficiently.", tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"], img: "bizz.png", ghLink: "https://github.com/ChaminduWn/BizzSup" },
      { n: "09", name: "WN Restaurant — Web App", sub: "Restaurant Management System", desc: "A restaurant management system built using the MERN stack. Provides menu browsing, ordering, payments, and user management.", tags: ["MERN", "Tailwind CSS", "Node.js", "React.js"], img: "WN Resturants.png", ghLink: "https://github.com/ChaminduWn/Resturant" },
      { n: "10", name: "WN Restaurant — Mobile App", sub: "Expo React Native App", desc: "React Native application serving as the user-facing counterpart to the web app. Supports menu browsing, order tracking, and cart management.", tags: ["React Native", "Expo", "MongoDB", "Node.js"], img: "Resturant mobile.png", ghLink: "https://github.com/ChaminduWn/Restaurant-MobileApp" },
      { n: "11", name: "FairyTalePlanner", sub: "Wedding Planning System", desc: "MERN wedding planning platform connecting couples with vendors. Features a budget tracker, Google Maps API, and admin-approved listings.", tags: ["MERN", "Google Maps API", "React", "MongoDB"], img: "wed.png", ghLink: "https://github.com/ChaminduWn/FairyTalePlanner" },
      { n: "12", name: "WN QR - QR Code Scanner", sub: "Flutter QR Code Scanner & Generator", desc: "Flutter based mobile application that allows users to scan and generate QR codes with ease, supporting sharing, saving contacts, and opening URLs.", tags: ["Flutter", "Dart", "QR Code", "Android", "iOS"], img: "qr scanner.png", ghLink: "https://github.com/ChaminduWn/Qr-Scanner-Flutter" },
      { n: "13", name: "Travel Learning Platform", sub: "Spring Boot + React.js", desc: "Spring Boot and React.js based web application blending travel planning with interactive learning, quizzes, and community chat features.", tags: ["Spring Boot", "React.js", "MongoDB", "WebSocket"], img: "travel.png", ghLink: "https://github.com/ChaminduWn/Travel-Management-Learning-Platform" },
      { n: "14", name: "The Flying Fish Game", sub: "Android Arcade Game", desc: "Android game developed with Kotlin where players control a fish to avoid obstacles and collect points, featuring touch controls and high scores.", tags: ["Kotlin", "Android SDK", "Arcade Game"], img: "fly.png", ghLink: "https://github.com/ChaminduWn/Android-Game-App" },
      { n: "15", name: "Car Rental App", sub: "Flutter Mobile App", desc: "Flutter-based mobile application for renting premium cars, integrated with Firebase Firestore for real-time data and BLoC architecture.", tags: ["Flutter", "Firebase", "BLoC", "Dart"], img: "car.png", ghLink: "https://github.com/ChaminduWn/Car_Rental" },
      { n: "16", name: "Treasurer Hunter", sub: "Python Maze Game", desc: "Python based game built using the Turtle graphics library, where players navigate a maze to collect eggs while avoiding enemies.", tags: ["Python", "Turtle Graphics", "Game Dev"], img: "treeasurer hunter.png", ghLink: "https://github.com/ChaminduWn/Hidden-Treasure-Game" },
      { n: "17", name: "Flight Booking Website", sub: "React.js & Tailwind CSS", desc: "Travel Booking Website allowing users to search flights, book tickets, featuring modern UI animations and Amadeus API integration.", tags: ["React.js", "Tailwind CSS", "Amadeus API"], img: "flight app.png", ghLink: "https://github.com/ChaminduWn/Flight-App" },
      { n: "18", name: "Calculator App", sub: "Android Calculator", desc: "Android application built with Kotlin performing basic arithmetic and complex expression evaluations with mxparser, clean UI and error handling.", tags: ["Kotlin", "Android SDK", "mxparser"], img: "cal4.jpg", ghLink: "https://github.com/ChaminduWn/Android-Calculator-App" },
    ];

    const ghSvg = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;

    function buildGhLinks(p) {
      if (p.ghFrontend && p.ghBackend) {
        return `<div class="proj-links">
          <a href="${p.ghFrontend}" target="_blank" rel="noopener noreferrer">${ghSvg} Frontend</a>
          <a href="${p.ghBackend}" target="_blank" rel="noopener noreferrer">${ghSvg} Backend</a>
        </div>`;
      }
      if (p.ghLink) {
        return `<div class="proj-links">
          <a href="${p.ghLink}" target="_blank" rel="noopener noreferrer">${ghSvg} GitHub →</a>
        </div>`;
      }
      return '';
    }

    const grid = document.getElementById('projGrid');
    grid.innerHTML = projects.map(p => `
    <div class="proj-card">
      <div class="proj-img">
        ${p.img ? `<img src="/assets/images/projects/${p.img}" alt="${p.name}" onerror="this.style.display='none';">` : ''}
      </div>
      <div class="proj-top">
        <span class="proj-num">${p.n}</span>
      </div>
      <div>
        <h3>${p.name}</h3>
        <div class="proj-sub">${p.sub}</div>
      </div>
      <p>${p.desc}</p>
      <div class="proj-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      ${buildGhLinks(p)}
    </div>
  `).join('');

    // ---- Certifications data ----
    const certifications = [
      { title: "Introduction to Amazon S3", issuer: "AWS", file: "AWS Introduction to Amazon Simple Storage Service (S3).pdf", icon: "☁️" },
      { title: "Connecting VPCs", issuer: "AWS SimuLearn", file: "AWS SimuLearn Connecting VPCs.pdf", icon: "☁️" },
      { title: "File Systems in the Cloud", issuer: "AWS SimuLearn", file: "AWS SimuLearn File Systems in the CloudURL.pdf", icon: "☁️" },
      { title: "Networking Concepts", issuer: "AWS SimuLearn", file: "AWS SimuLearn Networking Concepts.pdf", icon: "☁️" },
      { title: "Computer Solutions", issuer: "AWS SimuLearn", file: "AWS Simulern -Computer Solutions.pdf", icon: "☁️" },
      { title: "Configure Virtual Networks", issuer: "Microsoft Azure", file: "Configure virtual networks.pdf", icon: "🟦" },
      { title: "Core Security Concepts", issuer: "Microsoft Azure", file: "Core Security Concepts.pdf", icon: "🛡️" },
      { title: "Describe Azure Identity Access Security", issuer: "Microsoft Azure", file: "Describe Azure identity access securityURL.pdf", icon: "🟦" },
      { title: "Explore Relational Database Services", issuer: "Microsoft Azure", file: "Explore relational database services in Azure.pdf", icon: "💾" },
      { title: "Configure Azure Blob Storage", issuer: "Microsoft Learn", file: "Microsoft Learn  Configure Azure Blob StorageURL.pdf", icon: "🟦" },
      { title: "Add and Size Disks in Azure VMs", issuer: "Microsoft Learn", file: "Microsoft Learn Add and size disks in Azure virtual machinesURL.pdf", icon: "🟦" },
      { title: "Introduction to Virtual Machine", issuer: "Microsoft Azure", file: "azure - introduction to virtual machine.pdf", icon: "🟦" },
      { title: "Relational Databases", issuer: "Microsoft Azure", file: "Relational Databases.pdf", icon: "💾" },
      { title: "Python for Beginners", issuer: "University of Moratuwa", file: "Python for Beginners-University of Moratuwa.pdf", icon: "🐍" },
      { title: "Web Design for Beginners", issuer: "University of Moratuwa", file: "Web_Design_for_Beginners_E-Certificate.pdf", icon: "🌐" }
    ];

    const certGrid = document.getElementById('certGrid');
    if (certGrid) {
      certGrid.innerHTML = certifications.map(c => `
        <div class="cert-card">
          <a href="/assets/certificates/${encodeURIComponent(c.file)}" target="_blank" rel="noopener noreferrer">
            <div class="cert-icon">${c.icon}</div>
            <div class="cert-info">
              <h3>${c.title}</h3>
              <p>${c.issuer}</p>
            </div>
          </a>
        </div>
      `).join('');
    }

    // ---- Contact form -> mailto ----
    document.getElementById('contactForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value || 'Portfolio inquiry';
      const message = document.getElementById('message').value;
      const body = `From: ${name} (${email})%0D%0A%0D%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:chaminduwn@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    });