const CONFIG = {
  eventName:        "SYNKRONIX '26",
  eventTagline:     "One day. In sync.",
  collegeName:      "Anna University Regional Campus Madurai",
  deptName:         "Department of Computer Science & Engineering ",
  eventDateISO:     "2026-09-11T09:00:00",
  eventDateDisplay: "11 September 2026",
  venue:            "Main Auditorium, Anna University Regional Campus Madurai",
  contactEmail:     "synkronix.26@gmail.com",
  instagramUrl:     "https://www.instagram.com/synkronix_26",
  linkedinUrl:      "#",

  events: [
    // ---- Code Auction ----
    {
      slug: "code-auction",
      category: "Technical",
      title: "Code Auction",
      blurb: "Think Fast. Bid Smart. Code Better — bid Virtual Coins for coding problems, then solve what you win.",
      fullDescription: "Code Auction is an innovative technical event that combines strategic bidding with problem-solving. Teams compete by auctioning coding challenges using virtual coins, where every bid demands smart decisions and every solution earns valuable points.",
      teamSize: "3 members per team",
      venue: "DBMS Laboratory, Anna University Regional Campus, Madurai",
      timeAndDate: "9:00 AM on 11 September 2026",
      coordinator: "Dharshini B",
      coordinatorPhone: "+91 8056512175",
      eventFormat: [
        "Auction For the Questions (30 mins)",
        "Coding Challenge (60 mins)",
        "Tie Breaker (If Required)"
      ],
      rules: [
        "Coding topics will be auctioned one by one; teams can bid only with their allotted Virtual Coins.",
        "All successful bids are final.",
        "Only the coding problems won in the Auction Round can be attempted during the Coding Round.",
        "Solutions may be implemented in C, Java, or Python.",
        "Unsolved problems incur negative marking.",
        "Teams can purchase a Sealed Power Card using Virtual Coins, which contains an advantage or a challenge.",
        "In case of a tie, a Tie-Breaker Round will determine the winner.",
        "Use of mobile phones, AI tools, and internet access are strictly prohibited during the event."
      ],
      judgingCriteria: "Judging will be based on the total points earned by completing the auctioned coding problems. Each problem carries different points based on its difficulty level.",
      prizes: [
        "Winner: ₹2,000 (Cash Prize)",
        "Runner-up: ₹1,000 (Cash Prize)",
        "Every participant will receive a Participation Certificate."
      ],
      fee: "TBA",
      feeAmount: 0,
      image: "https://placehold.co/900x500/12151C/5B8DEF?text=Code+Auction",
      razorpayLink: "#"
    },

    // ---- PaperExpo ----
    {
      slug: "paperexpo",
      category: "Technical",
      title: "PaperExpo – Paper Presentation",
      blurb: "Present original research across AI/ML, cybersecurity, IoT, or cloud — 10 minutes per team to impress the panel.",
      fullDescription: "PaperExpo is a professional technical paper presentation event designed to encourage students to showcase their innovative ideas, research findings, and technical knowledge.",
      teamSize: "Individual or a team of up to 3 members",
      venue: "II Year CSE Classroom, IV Year CSE Classroom, Seminar Hall, Python Laboratory — AURCM",
      timeAndDate: "Starting from 10:00 AM on 11 September 2026",
      coordinator: "DAKSHAYANI R N R",
      coordinatorPhone: "+91 8608366618",
      tracks: [
        "Track 1: AI & ML and Data Science",
        "Track 2: Cybersecurity & Networks",
        "Track 3: Software Engineering & IoT",
        "Track 4: Cloud Computing & Database Management"
      ],
      presentationFormat: "10 minutes per team (max): 7 minutes presentation + 3 minutes Q&A",
      prerequisites: [
        "Submissions must be made through Google Form.",
        "Full paper submission (Maximum 10 pages).",
        "Paper format: Times New Roman, A4 size, Language — English."
      ],
      importantDates: {
        paperSubmissionDeadline: "TBA",
        paperAcceptanceNotification: "TBA",
        pptSubmissionAndRegistrationDeadline: "TBA"
      },
      rules: [
        "Papers must be original and free from plagiarism.",
        "Maximum paper length is 10 pages in the prescribed format.",
        "A team may consist of 1–3 members.",
        "Presentation time is strictly limited to 7 minutes, followed by 3 minutes of Q&A.",
        "The judges' decision will be final.",
        "Certificates will be awarded only to registered participants."
      ],
      judgingCriteria: [
        "Technical Content",
        "Innovation & Originality",
        "Quality of Research",
        "Presentation Skills",
        "Communication",
        "Response to Judges' Questions",
        "Time Management"
      ],
      prizes: [
        "First Prize: ₹3,000 + Winner Certificate",
        "Second Prize: ₹2,000 + Winner Certificate",
        "Third Prize: ₹1,000 + Winner Certificate",
        "Presentation Certificate for all presenters"
      ],
      fee: "TBA",
      feeAmount: 0,
      image: "https://placehold.co/900x500/12151C/5B8DEF?text=PaperExpo",
      razorpayLink: "#"
    },

    // ---- Prompt Clash ----
    {
      slug: "prompt-clash",
      category: "Technical",
      title: "Prompt Clash",
      blurb: "Think Smart. Prompt Better. Build the Future — craft the perfect AI prompt to generate the most impressive and innovative results.",
      fullDescription: "A battle of creativity where participants craft the perfect AI prompt to generate the most impressive, accurate, and innovative results. Think smart, prompt better, and let your imagination win!",
      teamSize: "2 members per team",
      venue: "CCC Lab, Anna University Regional Campus, Madurai",
      timeAndDate: "11 September 2026",
      coordinator: "Rubiga",
      coordinatorPhone: "+91 8015491001",
      rounds: [
        {
          name: "Round 1 – One Prompt Image Challenge",
          objective: "Generate the closest possible image using Gemini's Nano Banana feature.",
          rules: [
            "A common reference image will be displayed to all teams.",
            "Teams must recreate the image using only one prompt.",
            "Only a single prompt is allowed.",
            "Editing, regeneration, prompt modification or additional prompts are not allowed.",
            "Participants must use Gemini Nano Banana for this round.",
            "Generated images will be evaluated on accuracy to the reference image, prompt quality, and creativity."
          ],
          note: "No teams will be eliminated in Round 1. The Top 3 teams will receive a competitive advantage in Round 2 (to be announced during the event)."
        },
        {
          name: "Round 2 – AI GUI Challenge",
          objective: "Build a simple AI-powered solution with a GUI to solve a real-world problem.",
          rules: [
            "No eliminations — all teams will participate.",
            "Teams may use any AI tool of their choice.",
            "Participants must identify a real-world problem and develop a solution with a Graphical User Interface (GUI).",
            "A minimum of 5 prompts used during the development process must be submitted along with the final solution.",
            "The solution should clearly demonstrate the effective use of AI."
          ]
        }
      ],
      rules: [
        "Each team must consist of 2 members.",
        "A participant can be part of only one team.",
        "Each team must bring one laptop with a stable internet connection.",
        "Before the event begins, each team must create a new Gmail account using their team's name, to be used exclusively for logging into AI tools during the competition.",
        "Teams may use only the AI tools permitted for each round.",
        "Prompts should not be taken from AI.",
        "Plagiarism or using pre-created content is strictly prohibited.",
        "The judges' decision will be final and binding.",
        "Prompt history and source code should be submitted."
      ],
      judgingCriteria: [
        "Innovation and originality",
        "Problem-solving approach",
        "GUI design and usability",
        "Effective use of AI",
        "Quality of prompts submitted"
      ],
      prizes: [
        "Winner: ₹2,000 (Cash Prize)",
        "Runner-up: ₹1,000 (Cash Prize)",
        "Every participant will receive a Participation Certificate."
      ],
      tagline: "Think Smart. Prompt Better. Build the Future!",
      fee: "TBA",
      feeAmount: 0,
      image: "https://placehold.co/900x500/12151C/5B8DEF?text=Prompt+Clash",
      razorpayLink: "#"
    },

    // ---- Escape Room ----
    {
      slug: "escape-room",
      category: "Non-Technical",
      title: "Escape Room – The Last Evidence",
      blurb: "Step into a detective's shoes — analyze evidence, decode clues, and crack the murder mystery before time runs out.",
      fullDescription: "Think you have what it takes to solve a murder mystery? Step into the shoes of a detective and investigate a thrilling crime scene.",
      teamSize: "3 members per team",
      venue: "CSE 1st Year Classroom, AURCM",
      timeAndDate: "TBA on 11 September 2026",
      coordinator: "Swetha K",
      coordinatorPhone: "+91 9344462626",
      eventFormat: [
        "Crime Scene Investigation: Teams examine the crime scene, collect evidence, and solve clues to uncover the complete mystery within the given time limit."
      ],
      rules: [
        "Three teams will participate simultaneously, each receiving a different set of clues leading to the same final solution.",
        "The time limit for each team is 10 minutes.",
        "Teams must solve only their assigned clues and should not communicate or share clues with other teams.",
        "Mobile phones, internet access, and outside assistance are not permitted.",
        "Participants must not damage or remove any event materials.",
        "All clues and props must remain inside the event area.",
        "The decision of the event coordinators and judges will be final.",
        "Any form of malpractice, clue sharing, or unfair means will result in immediate disqualification."
      ],
      judgingCriteria: [
        "Correct identification of the murderer, weapon, and motive.",
        "Completion of all clues and tasks.",
        "Shortest completion time.",
        "Logical approach and teamwork."
      ],
      judgingNote: "If two teams finish at the same time, the team with the most accurate investigation and fewer hints used will be ranked higher.",
      prizes: [
        "Medals and certificates will be awarded to First 3 Places.",
        "All participants will get a Participation Certificate."
      ],
      fee: "TBA",
      feeAmount: 0,
      image: "https://placehold.co/900x500/12151C/FFC857?text=Escape+Room",
      razorpayLink: "#"
    },

     // ---- Mission Impossible ----
    {
      slug: "mission-impossible",
      category: "Non-Technical",
      title: "Mission Impossible",
      blurb: "Five checkpoints — observation, logic, memory, and gesture-only communication — to unlock the Final Vault.",
      fullDescription: "Five checkpoint non-technical event testing observation, logic, memory, communication and teamwork. Teams collect clues in each round to unlock the Final Vault password.",
      teamSize: "2 members per team",
      venue: "Small Drawing Hall, AURCM",
      timeAndDate: "1:30 PM – 3:30 PM on 11 September 2026",
      coordinator: "R. Abinaya",
      coordinatorPhone: "+91 8122792468",
      rounds: [
        "Observation: View an image for 30 seconds and answer questions.",
        "Logic: Solve brain teasers, number patterns, Sudoku, riddles.",
        "Card Memory: Match face-card pairs by memory.",
        "Communication: One member uses gestures only; teammate guesses.",
        "Final Vault: Combine clues to find the password. First buzzer gets first attempt; maximum three alternate attempts."
      ],
      rules: [
        "2 members per team.",
        "Two teams compete simultaneously.",
        "No electronic gadgets.",
        "No unfair means.",
        "Gestures only in the communication round.",
        "Judges' decision is final."
      ],
      eligibility: "Open to symposium participants.",
      judgingCriteria: ["Time", "Accuracy", "Teamwork", "Least Hints"],
      prizes: [
        "Winner Certificate & Prize.",
        "Participation gift for teams unlocking the vault."
      ],
      fee: "TBA",
      feeAmount: 0,
      image: "https://placehold.co/900x500/12151C/FFC857?text=Mission+Impossible",
      razorpayLink: "#"
    },

    // ---- Kadhaikkum Kalam ----
    {
      slug: "kadhaikkum-kalam",
      category: "Non-Technical",
      title: "Kadhaikkum Kalam",
      blurb: "\"Think. Speak. Convince. Win.\" — a debate with a role-reversal twist in the final.",
      fullDescription: "Kadhaikkum Kalam is an exciting debate competition designed to challenge participants' critical thinking, communication skills, and ability to present convincing arguments.",
      organizedBy: "Department of Computer Science and Engineering (CSE)",
      teamSize: "3 members per team",
      venue: "Conference Hall",
      rules: [
        "Topics will be allotted through a random draw system.",
        "A toss will determine whether the team will support or oppose the given topic.",
        "Each participant will have 1 minute to present their arguments.",
        "The top two teams from the elimination round will qualify for the Grand Finale.",
        "In the final round, teams must switch their stance after the buzzer and continue the debate from the opposite perspective.",
        "Repetition of previously presented arguments after the role reversal is strictly prohibited.",
        "Participants must maintain respectful communication throughout the event.",
        "The decision of the judges will be final."
      ],
      eligibility: [
        "Open to all students participating in the symposium.",
        "Each team must consist of 3 members.",
        "A participant can be part of only one team."
      ],
      prizes: [
        "Winner Team: ₹2,000 Cash Prize + Certificates",
        "Best Speaker Award: ₹1,000 Cash Prize + Certificate",
        "Participants: Certificates"
      ],
      tagline: "Think. Speak. Convince. Win.",
      fee: "TBA",
      feeAmount: 0,
      image: "https://placehold.co/900x500/12151C/FFC857?text=Kadhaikkum+Kalam",
      razorpayLink: "#"
    }
  ],

  sponsors: []
};
