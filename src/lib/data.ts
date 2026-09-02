export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  iconName: string;
  highlights: string[];
  metrics: string;
  techTags: string[];
  color: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "pos",
    title: "Point of Sale (POS) Systems",
    shortDesc: "Lightning-fast, offline-first retail & restaurant POS with barcode, receipt printing, and live sync.",
    fullDesc: "Engineered specifically for supermarkets, boutiques, restaurants, pharmacies, and wholesale distribution. Never lose a sale during internet outages with our hybrid local-first cloud synchronization.",
    badge: "Flagship Specialty",
    iconName: "ShoppingBag",
    highlights: [
      "Offline-first architecture (100% operational without internet)",
      "Instant thermal printer & barcode scanner integration",
      "Multi-counter & multi-branch real-time stock sync",
      "Split bills, table management & kitchen display (KDS)",
      "Daily automated reconciliation & cashier shift reports",
      "Integrated MPesa, Card & Contactless payment gateways",
    ],
    metrics: "0.2s Checkout speed | 99.99% Offline reliability",
    techTags: ["Offline SQLite", "React/Next.js", "Electron/Native", "Node.js", "Thermal ESC/POS"],
    color: "from-sky-500 to-cyan-400",
  },
  {
    id: "erp",
    title: "Inventory & Enterprise ERP",
    shortDesc: "End-to-end warehouse tracking, automated reordering, supplier management, and financials.",
    fullDesc: "Comprehensive enterprise resource planning built around your exact operations. Eliminate stock shrinkage, forecast demand, and control multi-location inventories from a single unified control room.",
    badge: "Enterprise Grade",
    iconName: "Boxes",
    highlights: [
      "Multi-warehouse inventory routing & transfer tracking",
      "Batch, serial number & expiry date monitoring",
      "Automated low-stock alerts & auto-generated purchase orders",
      "Profit & loss statements, ledger & financial reporting",
      "Role-based permissions with audit log timestamps",
      "Custom invoice generator with automated tax computation",
    ],
    metrics: "40% Less inventory waste | 100% Stock audit trail",
    techTags: ["PostgreSQL", "Next.js", "Prisma", "Redis Cache", "Docker"],
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: "school",
    title: "School & Campus ERP Systems",
    shortDesc: "Complete academic management: student records, grading, fee collection, attendance & parent SMS portal.",
    fullDesc: "Modernize educational institutions from kindergarten to universities. Centralize admissions, term fee tracking with instant SMS alerts, digital report cards, and library management.",
    badge: "Education Suite",
    iconName: "GraduationCap",
    highlights: [
      "Automated fee collection with instant SMS receipts to parents",
      "Term report card generation & grading analytics",
      "Biometric & RFID student / staff attendance",
      "Teacher timetable scheduling & lesson planning",
      "Parent & Student web / mobile companion portal",
      "Hostel, transport & library resource tracking",
    ],
    metrics: "95% On-time fee collection | 10k+ Students handled",
    techTags: ["TypeScript", "Next.js", "Tailwind CSS", "Twilio / Africa's Talking SMS", "PostgreSQL"],
    color: "from-purple-500 to-pink-400",
  },
  {
    id: "hospital",
    title: "Hospital & Clinic Management",
    shortDesc: "Electronic Medical Records (EMR), doctor scheduling, pharmacy inventory, and medical billing.",
    fullDesc: "HIPAA-compliant and doctor-friendly healthcare software. Streamline patient triage, lab results, triage queues, prescription tracking, and insurance claims with zero friction.",
    badge: "Healthcare",
    iconName: "Activity",
    highlights: [
      "Paperless Electronic Health Records (EHR / EMR)",
      "Doctor queue management & appointment booking",
      "In-house pharmacy POS with prescription dispenser audit",
      "Laboratory test requisitions & digital results delivery",
      "Insurance pre-authorization & billing management",
      "Encrypted patient medical history and vitals tracking",
    ],
    metrics: "70% Faster patient triage | 100% Encrypted records",
    techTags: ["Next.js", "Tailwind", "PostgreSQL", "HL7/FHIR ready", "WebSockets"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "custom",
    title: "Bespoke SaaS & Web / Mobile Apps",
    shortDesc: "Custom web platforms, customer portals, mobile apps (iOS & Android), and bespoke business tools.",
    fullDesc: "Have a unique workflow or a groundbreaking startup idea? We architect, design, and develop scalable cloud software, mobile apps, and customer portals from the ground up.",
    badge: "Custom Engineering",
    iconName: "Code2",
    highlights: [
      "Tailored UI/UX designed around your users' exact workflow",
      "Cross-platform iOS and Android mobile applications",
      "High-scale REST & GraphQL API architecture",
      "Custom payment, CRM & Third-party integrations",
      "Continuous CI/CD deployment on cloud servers (AWS/Vercel)",
      "Ongoing maintenance, SLAs, and security updates",
    ],
    metrics: "100% Custom code ownership | 99.9% SLA uptime",
    techTags: ["Next.js", "React Native", "Python / Node.js", "AWS", "Tailwind CSS"],
    color: "from-amber-500 to-orange-400",
  },
];

export const CASE_STUDIES = [
  {
    title: "UrbanBoutique SuperMart Retail Chain",
    category: "POS & Multi-Branch Inventory",
    result: "Reduced checkout queue times by 65% across 8 retail branches with zero downtime during peak season.",
    details: "Replaced a sluggish legacy desktop setup with SmartBook's offline-first POS. Integrated barcode scanners, cash drawers, and centralized live analytics dashboard for the owner.",
    tags: ["Retail POS", "Offline Sync", "Multi-Branch", "Thermal Printing"],
    metricNumber: "65%",
    metricLabel: "Faster Checkout Times",
  },
  {
    title: "St. Jude Premier Academy",
    category: "Campus ERP & Automated Fee Portal",
    result: "Automated fee invoicing for 1,400+ students with instant SMS payment receipts and real-time ledger.",
    details: "Eliminated paper receipt books and reconciliation delays. Parents receive instant payment links via SMS, while teachers submit term grades with one click.",
    tags: ["School ERP", "SMS Gateway", "Fee Reconciliation", "Parent Portal"],
    metricNumber: "100%",
    metricLabel: "Paperless Reconciliation",
  },
  {
    title: "AfyaCare Multi-Speciality Clinic",
    category: "Healthcare EMR & Pharmacy POS",
    result: "Digitized 18,000+ patient records, cut patient wait times in half, and plugged pharmacy inventory leakage.",
    details: "Built an intuitive, secure clinical workflow connecting reception, doctor consultations, lab orders, and pharmacy billing under a unified modern dashboard.",
    tags: ["Clinic EMR", "Pharmacy POS", "Prescriptions", "Doctor Queues"],
    metricNumber: "50%",
    metricLabel: "Reduced Patient Wait Times",
  },
];

export const STATS = [
  { label: "Active Systems Deployed", value: "180+", subtext: "Across retail, schools & enterprise" },
  { label: "Daily Transactions", value: "$1.2M+", subtext: "Seamlessly processed daily" },
  { label: "System Uptime", value: "99.99%", subtext: "Zero-data-loss architecture" },
  { label: "Client Satisfaction", value: "98.7%", subtext: "Dedicated on-site & remote support" },
];

export const DEVELOPMENT_STEPS = [
  {
    step: "01",
    title: "Discovery & Blueprinting",
    desc: "We analyze your exact business processes, pain points, hardware setup (scanners, printers), and user flows to craft a detailed functional blueprint.",
  },
  {
    step: "02",
    title: "Interactive UI/UX Prototype",
    desc: "We create interactive, high-fidelity prototypes so you can click through every screen, register, and report before writing a single line of production code.",
  },
  {
    step: "03",
    title: "Agile Development & Integrations",
    desc: "We build your software with modern tech stacks, implementing offline reliability, hardware drivers, bank/payment gateways, and automated testing.",
  },
  {
    step: "04",
    title: "On-Site Setup & Staff Training",
    desc: "We deploy the software to your machines, configure receipt printers, network routers, and conduct hands-on training for your cashiers and managers.",
  },
  {
    step: "05",
    title: "Continuous Maintenance & 24/7 SLA",
    desc: "You get continuous cloud backups, priority technical support, regular security updates, and feature expansions as your business grows.",
  },
];

export const TECH_STACK = [
  { name: "Next.js / React", category: "Frontend & Web Apps", icon: "Globe" },
  { name: "TypeScript", category: "Type-Safe Architecture", icon: "Code" },
  { name: "Tailwind CSS", category: "Modern Responsive UI", icon: "Layout" },
  { name: "Node.js & Python", category: "High-Speed Backend APIs", icon: "Server" },
  { name: "PostgreSQL / SQLite", category: "Robust Offline/Online DB", icon: "Database" },
  { name: "Electron / Native", category: "Desktop POS Applications", icon: "Monitor" },
  { name: "React Native / Flutter", category: "Mobile iOS & Android Apps", icon: "Smartphone" },
  { name: "ESC/POS & Hardware API", category: "Printers, Scanners, Drawers", icon: "Printer" },
];

export const FAQS = [
  {
    q: "Will the Point of Sale (POS) system work if the internet goes down?",
    a: "Yes, 100%! We build our POS solutions with a local-first offline architecture (embedded SQLite / IndexedDB). Your cashiers can continue ringing sales, scanning barcodes, and printing receipts uninterrupted. Once your internet reconnects, all transactions sync automatically to the cloud.",
  },
  {
    q: "Do you support our existing hardware (thermal printers, barcode scanners, cash drawers)?",
    a: "Absolutely. We build direct drivers for standard USB, Bluetooth, Ethernet (LAN), and Serial hardware from Epson, Star Micronics, Xprinter, Honeywell, Datalogic, and generic POS peripherals.",
  },
  {
    q: "How long does it take to create and deploy a custom system?",
    a: "Standard POS deployments or turnkey management systems typically take 1 to 3 weeks including staff training. Complex multi-branch ERPs or fully custom SaaS platforms generally range from 3 to 8 weeks depending on custom workflows.",
  },
  {
    q: "Do you provide on-site installation and staff training?",
    a: "Yes! We offer on-site physical installation, hardware configuration, and dedicated training sessions for your cashiers, accountants, and administrators, accompanied by video walkthrough guides.",
  },
  {
    q: "What ongoing support and warranties do you provide?",
    a: "Every project includes free initial post-launch warranty support, automated cloud backups, bug fixes, and continuous technical assistance via direct WhatsApp hotline, phone, and remote desktop access.",
  },
];
