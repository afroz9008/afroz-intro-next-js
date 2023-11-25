import { Html, Head, Main, NextScript } from 'next/document'
  
export default function Document() {
     return (
       <>
         <Head>
             <!-- Common Tag -->
             <meta charset="utf-8" />
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <title>Afroz and Nafisha Wedding Invitation</title>
         
             <!-- SEO Tag -->
             <meta name="author" content="dewanakl" />
             <meta name="language" content="Indonesia" />
             <meta name="robots" content="all, max-image-preview:large" />
             <meta name="googlebot" content="all, max-image-preview:large" />
             <meta name="title" content="Afroz and Nafisha Wedding Invitation" />
             <meta name="description" content="Afroz and Nafisha Wedding Invitation" />
             <meta property="og:title" content="Afroz and Nafisha Wedding Invitation" />
             <meta property="og:description" content="Afroz and Nafisha Wedding Invitation" />
             <meta property="og:image" content="/assets/images/bg.png" />
             <meta property="og:image:type" content="image/jpeg" />
             <meta property="og:image:alt" content="Afroz and Nafisha Wedding Invitation" />
             <meta property="og:type" content="website" />
             <meta property="og:locale" content="id_ID" />
             <meta property="og:site_name" content="Afroz and Nafisha Wedding Invitation" />
         
             <!-- Appearance -->
             <meta name="mobile-web-app-capable" content="yes" />
             <meta name="apple-mobile-web-app-title" content="Afroz and Nafisha Wedding Invitation" />
             <meta name="color-scheme" content="dark" />
             <link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon-32x32.png" />
             <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png" />
             <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
             <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
             <link rel="manifest" href="/assets/images/site.webmanifest" />
             <link rel="mask-icon" href="/assets/images/safari-pinned-tab.svg" color="#e5cacf" />
             <meta name="msapplication-TileColor" content="#e5cacf" />
             <meta name="theme-color" content="#e5cacf" />
         
             <!-- Preconnect CDN -->
             <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
             <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
             <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
         
             <!-- Dependencies CSS -->
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
                 integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossOrigin="anonymous" />
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                 integrity="sha256-MBffSnbbXwHCuZtgPYiwMQbfE7z+GOZ7fBPCNB06Z98=" crossOrigin="anonymous" />
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/all.min.css"
                 integrity="sha256-CTSx/A06dm1B063156EVh15m6Y67pAjZZaQc89LLSrU=" crossOrigin="anonymous" />
             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"
                 integrity="sha256-GqiEX9BuR1rv5zPU5Vs2qS/NSHl1BJyBcjQYJ6ycwD4=" crossOrigin="anonymous" />
         
             <!-- Fonts -->
             <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" />
             <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" />
             <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&display=swap" />
         
             <!-- App CSS -->
             <link rel="stylesheet" href="/css/app.css" />
         </Head>
         <body style={{overflowY: "hidden"}}>

           <!-- Navbar Bottom -->
           <nav className="navbar navbar-light bg-light navbar-expand fixed-bottom rounded-top-4 p-0" id="navbar-menus">
               <ul className="navbar-nav nav-justified w-100 align-items-center">
                   <li className="nav-item">
                       <a className="nav-link" href="#home">
                           <i className="fas fa-home"></i>
                           <span className="d-block" style={{fontSize: "0.7rem"}}>Home</span>
                       </a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#bride">
                           <i className="fa-solid fa-user-group"></i>
                           <span className="d-block" style={{fontSize: "0.7rem"}}>Bride</span>
                       </a>
                   </li>
                   <li className="nav-item">
                       <a className="nav-link" href="#date">
                           <i className="fa-solid fa-calendar-check"></i>
                           <span className="d-block" style={{fontSize: "0.7rem"}}>Date</span>
                       </a>
                   </li>
               </ul>
           </nav>
       
           <!-- Main Content -->
           <main className="text-light" data-bs-spy="scroll" data-bs-target="#navbar-menus" data-bs-root-margin="0px 0px -40%"
               data-bs-smooth-scroll="true" tabindex="0">
       
               <!-- Home -->
               <section className="container" id="home">
       
                   <div className="text-center pt-4">
                       <h1 className="font-esthetic my-4" style={{fontSize: "2.5rem"}}>Wedding Invitation</h1>
       
                       <div className="py-4">
                           <div className="img-crop  shadow mx-auto">
                               <img src="/assets/images/bg.png" alt="bg" onclick="util.modal(this)" />
                           </div>
                       </div>
       
                       <h1 className="font-esthetic my-4" style={{fontSize: "3rem"}}>Afroz & Nafisha</h1>
                       <h4>Sunday, December 03, 2023</h4>
                       <a className="btn btn-outline-light btn-sm shadow rounded-pill px-3 my-2" target="_blank"
                           href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Afroz%20and%20Nafisha&details=The%20Wedding%20of%20Afroz%20and%20Nafisha%20%7C%2003%20December%202023%20%7C%20Sorathiya%20Ghanchee%20Jamatkhana,%20Vadala%20Chowk,%20Una%20%7C%2010.00AM%20-%2002.00PM&dates=20231203T100000/20231203T140000&location=https://maps.app.goo.gl/JgTvDHuaQRMwPZ2G7">
                           <i className="fa-solid fa-calendar-check me-2"></i>Save The Date
                       </a>
       
                       <div className="d-flex justify-content-center align-items-center mt-4 mb-2">
                           <div className="mouse-animation">
                               <div className="scroll-animation"></div>
                           </div>
                       </div>
       
                       <p className="m-0">Scroll Down</p>
                   </div>
               </section>
       
               <!-- Wave Separator -->
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#111111" fill-opacity="1"
                       d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                   </path>
               </svg>
               <!-- Bride -->
               <section className="dark-section" id="bride">
       
                   <div className="text-center">
                       <h1 className="font-arabic py-4 px-2" style={{fontSize: "2rem"}}>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
                       <h1 className="font-esthetic py-4 px-2" style={{fontSize: "2rem"}}>Assalamualaikum Warahmatullahi Wabarakatuh
                       </h1>
       
                       <p className="pb-3 px-3">
                           With all due respect. We invite you and your relatives.
                           Please also attend our wedding event:
                       </p>
       
                       <div className="overflow-x-hidden">
       
                           <div data-aos="fade-right" data-aos-duration="2000">
                               <div className="img-crop border border-3 border-light shadow my-4 mx-auto">
                                   <img src="/assets/images/cowo.png" alt="cowo" onclick="util.modal(this)" />
                               </div>
                               <h1 className="font-esthetic" style={{fontSize: "3rem"}}>Afroz Sorathiya</h1>
                               <h5 className="mt-3 mb-0">Son</h5>
                               <p className="mb-0">Mr. & Mrs. Sorathiya</p>
                           </div>
       
                           <h1 className="font-esthetic my-4" style={{fontSize: "4rem"}}>&</h1>
       
                           <div data-aos="fade-left" data-aos-duration="2000">
                               <div className="img-crop border border-3 border-light shadow my-4 mx-auto">
                                   <img src="/assets/images/cewe.png" alt="cewe" onclick="util.modal(this)" />
                               </div>
                               <h1 className="font-esthetic" style={{fontSize: "3rem"}}>Nafisha Sorathiya</h1>
                               <h5 className="mt-3 mb-0">Daughter</h5>
                               <p className="mb-0">Mr. & Mrs. Sorathiya</p>
                           </div>
                       </div>
                   </div>
               </section>
       
               <!-- Wave Separator -->
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#111111" fill-opacity="1"
                       d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                   </path>
               </svg>
       
               <!-- Firman Allah Subhanahu Wa Ta'ala -->
               <div className="container">
                   <div className="text-center" data-aos="fade-up" data-aos-duration="2000">
       
                       <h1 className="font-esthetic mt-0 mb-3" style={{fontSize: "2rem"}}>
                           Allah Subhanahu Wa Ta'ala said
                       </h1>
       
                       <p style={{fontSize: "0.9rem"}} className="px-2">
                           وَمِنۡ ءَايَٰتِهِۦٓ أَنۡ خَلَقَ لَكُم مِّنۡ أَنفُسِكُمۡ أَزۡوَٰجٗا لِّتَسۡكُنُوٓاْ إِلَيۡهَا
                           وَجَعَلَ بَيۡنَكُم مَّوَدَّةٗ وَرَحۡمَةًۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّقَوۡمٖ يَتَفَكَّرُونَ
                       </p>
       
                       <p style={{fontSize: "0.9rem"}} className="px-2">
                           And of His signs is that He created for you from yourselves mates that you may find tranquillity in
                           them; and He placed between you affection and mercy. Indeed in that are signs for a people who give
                           thought.
                       </p>
       
                       <p style={{fontSize: "0.9rem"}} className="px-2">
                           اور اس کی نشانیوں میں سے ہے کہ تمہاری ہی جنس سے بیویاں پیدا کیں تاکہ تم ان سے آرام پاؤ اس نے تمہارے
                           درمیان محبت اور ہمدردی قائم کر دی، یقیناً غور وفکر کرنے والوں کے لئے اس میں بہت سی نشانیاں ہیں
                       </p>
       
                       <span className="mb-0"><strong>QS. Ar-Rum Ayat 21</strong></span>
                   </div>
               </div>
       
               <!-- Wave Separator -->
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                   <path fill="#111111" fill-opacity="1"
                       d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                   </path>
               </svg>
       
               <!-- Tanggal -->
               <section className="dark-section" id="date">
       
                   <div className="container">
                       <div className="text-center">
       
                           <h1 className="font-esthetic py-3" style={{fontSize: "2rem"}}>Time to Event</h1>
                           <div className="border rounded-pill shadow py-2 px-3 mx-2 mb-4">
       
                               <!-- Replace the time with time-data (according to the format) -->
                               <div className="row justify-content-center" time-data="2023-12-03 10:00:00" id="time-display">
                                   <div className="samll-font col-2 p-1 ps-2">
                                       <h2 className="d-inline m-0 p-0" id="day">0</h2><small
                                           className="ms-1 me-0 my-0 p-0 d-inline">Day</small>
                                   </div>
                                   <div className="samll-font col-3 p-1">
                                       <h2 className="d-inline m-0 p-0" id="hours">0</h2><small
                                           className="ms-1 me-0 my-0 p-0 d-inline">Hours</small>
                                   </div>
                                   <div className="samll-font col-3 p-1">
                                       <h2 className="d-inline m-0 p-0" id="minutes">0</h2><small
                                           className="ms-1 me-0 my-0 p-0 d-inline">Minutes</small>
                                   </div>
                                   <div className="samll-font col-4 p-1">
                                       <h2 className="d-inline m-0 p-0" id="seconds">0</h2><small
                                           className="ms-1 me-0 my-0 p-0 d-inline">Seconds</small>
                                   </div>
                               </div>
                           </div>
       
                           <p style={{fontSize: "0.9rem"}} className="mt-4 py-2">
                               By asking for the mercy and pleasure of Allah Subhanahu Wa Ta'ala, Allah Ta'ala willing we will
                               organize the event:
                           </p>
       
                           <div className="overflow-x-hidden">
                               <div className="py-2" data-aos="fade-left" data-aos-duration="1500">
                                   <h1 className="font-esthetic" style={{fontSize: "2rem"}}>Wedding start at</h1>
                                   <p>10:00 AM </p>
                               </div>
       
                               <div className="py-2" data-aos="fade-right" data-aos-duration="1500">
                                   <h1 className="font-esthetic" style={{fontSize: "2rem"}}>End at</h1>
                                   <p>02:00 PM</p>
                               </div>
                           </div>
       
                           <div className="py-2" data-aos="fade-up" data-aos-duration="1500">
                               <a className="btn btn-outline-light btn-sm shadow rounded-pill px-3 my-2" target="_blank"
                                   href="https://maps.app.goo.gl/JgTvDHuaQRMwPZ2G7">
                                   <i className="fa-solid fa-map-location-dot me-2"></i> Look at Google Maps
                               </a>
                               <p className="mb-0 mt-1 mx-1 pb-4" style={{fontSize: "0.9rem"}}>
                                   Sorathiya Ghanchee Jamatkhana, Vadala Chowk, Una
                               </p>
                           </div>
                       </div>
                   </div>
               </section>
           </main>
           <!-- Wave Separator -->
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
               <path fill="#111111" fill-opacity="1"
                   d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
               </path>
           </svg>
           <!-- Footer Undangan -->
           <footer>
               <div className="container">
                   <div className="text-center">
       
                       <p style={{fontSize: "0.9rem"}} className="pt-2 pb-1 px-2" data-aos="fade-up" data-aos-duration="1500">
                           It is an honor and happiness for us if coming. Thank you for coming to give us your blessing.
                       </p>
       
                       <h1 className="font-esthetic" data-aos="fade-up" data-aos-duration="2000">Waalaikumassalam Warahmatullahi
                           Wabarakatuh</h1>
                       <h1 className="font-arabic py-4 px-2" data-aos="fade-up" data-aos-duration="2000" style={{fontSize: "2rem"}}>
                           اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ</h1>
       
                       <hr className="mt-3 mb-2">
       
                       <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                           <div className="col-auto">
                               <small className="text-light">
                                   Build with<i className="fa-solid fa-heart mx-1"></i>Afroz Sorathiya
                               </small>
                           </div>
                       </div>
                   </div>
               </div>
           </footer>
       
           <!-- Welcome Page -->
           <div className="loading-page" id="welcome" style={{opacity: 1}}>
               <div className="d-flex justify-content-center align-items-center" style={{height: "100vh !important"}}>
       
                   <div className="text-center">
                       <h1 className="font-esthetic mb-4" style={{fontSize: "2.5rem"}}>The Wedding Of</h1>
       
                       <div className="img-crop shadow mb-4 mx-auto">
                           <img src="/assets/images/bg.png" alt="bg" />
                       </div>
       
                       <!-- <h1 className="font-esthetic my-4" style={{fontSize: "2.5rem"}}>Afroz &nbsp; & &nbsp; Nafisha</h1> -->
       
                       <button type="button" className="btn btn-light shadow rounded-4 mt-4" onclick="util.open()">
                           <i className="fa-solid fa-envelope-open me-2"></i>View Invitation
                       </button>
                   </div>
               </div>
           </div>
       
           <!-- Audio Button -->
           <button type="button" id="music-button" style={{display: "none"}} className="btn btn-light btn-sm rounded-circle btn-music"
               onclick="util.play(this)" data-status="true" data-url="/assets/music/sound.mp3">
               <i className="fa-solid fa-circle-pause"></i>
           </button>
       
           <!-- Loading page -->
           <div className="loading-page" id="loading" style={{opacity: 1}}>
               <div className="d-flex justify-content-center align-items-center" style={{height: "100vh !important"}}>
                   <div className="text-center w-75">
                       <img className="img-fluid mb-3" src="/assets/images/favicon-32x32.png" alt="icon" style={{width: "3.5rem"}} />
                       <div className="progress" role="progressbar" style={{height: "0.5rem"}}>
                           <div className="progress-bar" id="bar" style={{width: "0%"}}></div>
                       </div>
                       <small className="mt-1 text-light" id="progress-info">Loading Invitation</small>
                   </div>
               </div>
           </div>
       
           <!-- Modal Foto Large -->
           <div className="modal fade" id="modal-image" tabindex="-1" aria-hidden="true">
               <div className="modal-dialog modal-dialog-centered modal-xl">
                   <div className="modal-content">
                       <div className="modal-body p-0">
                           <div className="d-flex justify-content-center align-items-center" style={{height: "100%"}}>
                               <img src="/assets/images/bg.png" className="w-100" alt="foto" id="show-modal-image" />
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <NextScript />
           <!-- Dependencies JS -->
           <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
               integrity="sha256-gvZPYrsDwbwYJLD5yeBfcNujPhRoGOY831wwbIzz3t0=" crossOrigin="anonymous"></script>
           <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"
               integrity="sha256-pQBbLkFHcP1cy0C8IhoSdxlm0CtcH5yJ2ki9jjgR03c=" crossOrigin="anonymous"></script>
           <script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js"
               integrity="sha256-XG5M9shcLLpu8ct5bVbu6lLVzLpfZChl+csxdyLVP18=" crossOrigin="anonymous"></script>
       
           <!-- App JS -->
           <script src="/js/app.js"></script>
         </body>
       </>
     )
   }