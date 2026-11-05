"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Language = "en" | "ru" | "uk";
type NavMode = "hero" | "visible" | "hidden";

const languages: { code: Language; label: string; title: string }[] = [
  { code: "en", label: "EN", title: "English" },
  { code: "ru", label: "RU", title: "Русский" },
  { code: "uk", label: "UA", title: "Українська" },
];

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "GitHub", "npm", "Python", "SQLite", "VS Code", "Tailwind CSS", "Docker"];

const copy = {
  en: {
    nav: { work: "Work", services: "Services", about: "About", talk: "Let's talk" },
    available: "Open to project enquiries",
    heroTitle: "Bozemen.", heroConnector: "Web", heroEmphasis: "developer.",
    heroCopy: "I build interfaces with React and TypeScript and connect them to application logic and databases. Here is what I have built so far.",
    viewWork: "View selected work", email: "Email me", role: "Web Developer · Full Stack",
    based: "Based in Ukraine", remote: "Remote worldwide", coreSkills: "Core skills",
    selectedWork: "Selected work", projectHeading: "From interface", projectAccent: "to a working product.",
    projectIntro: "Ecommerce and Telegram tools: projects that connect interfaces, application logic and integrations.",
    projectType: "Personal project · 2026",
    projectDescription: "A complete e-commerce application with product catalog, secure authentication, cart, checkout, order history and admin tools.",
    features: ["USER / ADMIN roles", "JWT in httpOnly cookie", "Transactional orders", "Responsive interface"],
    viewProject: "View project on GitHub",
    servicesKicker: "How I work", servicesHeading: "The details", servicesAccent: "behind the interface.",
    servicesIntro: "These are the parts of development I practice in my own projects.",
    services: [
      ["Full-stack development", "Websites and web applications — from a responsive interface to API, database and deployment-ready code."],
      ["Existing project improvements", "Bug fixes, new features, UI updates and careful work inside an existing codebase."],
      ["Data & application logic", "Forms, request validation, database models and order processing in NovaShop."],
    ],
    about: "About", aboutHeading: "Learning by building.", aboutAccent: "One feature at a time.",
    aboutOne: "I’m Bozemen, a developer based in Ukraine. I work with React and TypeScript and learn backend development through practical projects.",
    aboutTwo: "In NovaShop I worked on the catalog, cart, authentication and database-backed orders. This site is where I collect that work and explain the decisions behind it.",
    principles: ["Clear communication", "Practical solutions", "Honest project scope"],
    contactKicker: "Have a project?", contactHeading: "Have something", contactAccent: "in mind?", back: "Back to top",
    caseTask: "The task",
    caseTaskText: "Build a complete shopping flow: browse products, place an order and view its status.",
    caseRole: "My work",
    caseRoleText: "Storefront, cart state, authentication, order validation and database models.",
    stackHeading: "Tools I work with",
    skip: "Skip to projects",
  },
  ru: {
    nav: { work: "Работы", services: "Услуги", about: "Обо мне", talk: "Связаться" },
    available: "Открыт к обсуждению проектов",
    heroTitle: "Bozemen.", heroConnector: "Веб-", heroEmphasis: "разработчик.",
    heroCopy: "Создаю интерфейсы на React и TypeScript, связываю их с логикой приложения и базой данных. Здесь — мои проекты и детали их реализации.",
    viewWork: "Смотреть работы", email: "Написать мне", role: "Веб-разработчик · Full Stack",
    based: "Нахожусь в Украине", remote: "Работаю по всему миру", coreSkills: "Основной стек",
    selectedWork: "Избранные проекты", projectHeading: "От интерфейса", projectAccent: "до рабочего продукта.",
    projectIntro: "Интернет-магазин и инструменты для Telegram: проекты, в которых интерфейс связан с логикой приложения и интеграциями.",
    projectType: "Личный проект · 2026",
    projectDescription: "Полноценное e-commerce приложение с каталогом, безопасной авторизацией, корзиной, оформлением заказа, историей покупок и панелью администратора.",
    features: ["Роли USER / ADMIN", "JWT в httpOnly cookie", "Транзакционные заказы", "Адаптивный интерфейс"],
    viewProject: "Открыть проект на GitHub",
    servicesKicker: "Мой подход", servicesHeading: "Что стоит", servicesAccent: "за интерфейсом.",
    servicesIntro: "Эти направления я осваиваю на практике в собственных проектах.",
    services: [
      ["Full-stack разработка", "Сайты и веб-приложения — от адаптивного интерфейса до API, базы данных и готового к развёртыванию кода."],
      ["Развитие существующих проектов", "Исправление ошибок, новые функции, обновление интерфейса и аккуратная работа в существующей кодовой базе."],
      ["Данные и логика приложения", "Формы, проверка запросов, модели базы данных и обработка заказов в NovaShop."],
    ],
    about: "Обо мне", aboutHeading: "Учусь, создавая.", aboutAccent: "От задачи к задаче.",
    aboutOne: "Я Bozemen, разработчик из Украины. Работаю с React и TypeScript, изучаю бэкенд на практических задачах.",
    aboutTwo: "В NovaShop занимался каталогом, корзиной, авторизацией и заказами с сохранением в базе. На этом сайте собираю свои работы и рассказываю, как они устроены.",
    principles: ["Понятная коммуникация", "Практичные решения", "Честная оценка проекта"],
    contactKicker: "Есть проект?", contactHeading: "Есть задача", contactAccent: "для обсуждения?", back: "Наверх",
    caseTask: "Задача",
    caseTaskText: "Реализовать путь покупки: от выбора товара до оформления заказа и просмотра его статуса.",
    caseRole: "Моя работа",
    caseRoleText: "Витрина, состояние корзины, авторизация, проверка заказов и модели базы данных.",
    stackHeading: "Мои инструменты",
    skip: "Перейти к проектам",
  },
  uk: {
    nav: { work: "Роботи", services: "Послуги", about: "Про мене", talk: "Зв'язатися" },
    available: "Відкритий до обговорення проєктів",
    heroTitle: "Bozemen.", heroConnector: "Веб-", heroEmphasis: "розробник.",
    heroCopy: "Створюю інтерфейси на React і TypeScript, поєдную їх із логікою застосунку та базою даних. Тут — мої проєкти й деталі їх реалізації.",
    viewWork: "Переглянути роботи", email: "Написати мені", role: "Веброзробник · Full Stack",
    based: "Перебуваю в Україні", remote: "Працюю по всьому світу", coreSkills: "Основний стек",
    selectedWork: "Обрані проєкти", projectHeading: "Від інтерфейсу", projectAccent: "до робочого продукту.",
    projectIntro: "Інтернет-магазин та інструменти для Telegram: проєкти, у яких інтерфейс поєднаний із логікою застосунку й інтеграціями.",
    projectType: "Особистий проєкт · 2026",
    projectDescription: "Повноцінний e-commerce застосунок із каталогом, безпечною авторизацією, кошиком, оформленням замовлення, історією покупок і панеллю адміністратора.",
    features: ["Ролі USER / ADMIN", "JWT в httpOnly cookie", "Транзакційні замовлення", "Адаптивний інтерфейс"],
    viewProject: "Відкрити проєкт на GitHub",
    servicesKicker: "Мій підхід", servicesHeading: "Що стоїть", servicesAccent: "за інтерфейсом.",
    servicesIntro: "Ці напрями я опановую на практиці у власних проєктах.",
    services: [
      ["Full-stack розробка", "Сайти та вебзастосунки — від адаптивного інтерфейсу до API, бази даних і готового до розгортання коду."],
      ["Розвиток наявних проєктів", "Виправлення помилок, нові функції, оновлення інтерфейсу й акуратна робота в наявній кодовій базі."],
      ["Дані та логіка застосунку", "Форми, перевірка запитів, моделі бази даних і обробка замовлень у NovaShop."],
    ],
    about: "Про мене", aboutHeading: "Навчаюся, створюючи.", aboutAccent: "Від задачі до задачі.",
    aboutOne: "Я Bozemen, розробник з України. Працюю з React і TypeScript, вивчаю бекенд на практичних задачах.",
    aboutTwo: "У NovaShop працював над каталогом, кошиком, авторизацією та замовленнями зі збереженням у базі. На цьому сайті збираю свої роботи й розповідаю, як вони влаштовані.",
    principles: ["Зрозуміла комунікація", "Практичні рішення", "Чесна оцінка проєкту"],
    contactKicker: "Є проєкт?", contactHeading: "Є задача", contactAccent: "для обговорення?", back: "Нагору",
    caseTask: "Завдання",
    caseTaskText: "Реалізувати шлях покупки: від вибору товару до оформлення замовлення й перегляду його статусу.",
    caseRole: "Моя робота",
    caseRoleText: "Вітрина, стан кошика, авторизація, перевірка замовлень і моделі бази даних.",
    stackHeading: "Мої інструменти",
    skip: "Перейти до проєктів",
  },
};

const traflumeCopy = {
  en: {
    type: "Telegram platform", description: "A platform for Telegram traffic, promotion and bot monetization. Campaigns, connected resources and integrations come together in one workflow.",
    features: ["Campaign and order management", "CRM and resource tracking", "REST API and bot integrations"], link: "Explore Traflume", illustration: "Traflume website and dashboard preview",
  },
  ru: {
    type: "Платформа для Telegram", description: "Платформа для Telegram-трафика, продвижения и монетизации ботов. Заказы, подключённые ресурсы и интеграции объединены в одном рабочем процессе.",
    features: ["Управление заказами и продвижением", "CRM и учёт ресурсов", "REST API и интеграции с ботами"], link: "Открыть Traflume", illustration: "Сайт и личный кабинет Traflume",
  },
  uk: {
    type: "Платформа для Telegram", description: "Платформа для Telegram-трафіку, просування та монетизації ботів. Замовлення, підключені ресурси й інтеграції об’єднані в одному робочому процесі.",
    features: ["Керування замовленнями й просуванням", "CRM та облік ресурсів", "REST API та інтеграції з ботами"], link: "Відкрити Traflume", illustration: "Сайт та особистий кабінет Traflume",
  },
};

type ProjectProps = {
  name: string; number: number; image: string; alt: string; width: number; height: number;
  description: string; features: readonly string[]; tags: readonly string[]; href: string; link: string;
  notes?: { title: string; text: string }[];
};

function ProjectCard(project: ProjectProps) {
  return <article className="projectCard" aria-labelledby={`project-${project.number}`}>
    <div className="projectVisual"><Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${project.image}`} alt={project.alt} width={project.width} height={project.height} sizes="(max-width: 900px) 100vw, 55vw" /></div>
    <div className="projectInfo">
      <div className="projectTitleRow"><h3 id={`project-${project.number}`}>{project.name}</h3><span aria-hidden="true">{project.number}</span></div>
      <p>{project.description}</p>
      {project.notes && <dl className="caseNotes">{project.notes.map(note => <div key={note.title}><dt>{note.title}</dt><dd>{note.text}</dd></div>)}</dl>}
      <ul className="featureList">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <a className="textLink" href={project.href} target="_blank" rel="noopener noreferrer">{project.link} <span aria-hidden="true">↗</span></a>
    </div>
  </article>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [isLanguageTransitioning, setIsLanguageTransitioning] = useState(false);
  const [navMode, setNavMode] = useState<NavMode>("hero");
  const languageChangeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const languageFinishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingLanguage = useRef<Language>("en");
  const scrollAnchor = useRef<{ element: Element; top: number } | null>(null);
  const t = copy[language];
  const traflume = traflumeCopy[language];

  useLayoutEffect(() => {
    const anchor = scrollAnchor.current;
    if (anchor) {
      window.scrollBy({ top: anchor.element.getBoundingClientRect().top - anchor.top, behavior: "instant" });
      scrollAnchor.current = null;
    }
  }, [language]);

  useEffect(() => {
    let saved: Language | null = null;
    try { saved = window.localStorage.getItem("portfolio-language") as Language | null; } catch {}
    if (saved && languages.some(({ code }) => code === saved)) {
      const frame = window.requestAnimationFrame(() => setLanguage(saved));
      document.documentElement.lang = saved;
      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => () => {
    if (languageChangeTimer.current) clearTimeout(languageChangeTimer.current);
    if (languageFinishTimer.current) clearTimeout(languageFinishTimer.current);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let upwardDistance = 0;

    function updateNavigation() {
      const currentY = window.scrollY;

      if (currentY <= 12) {
        upwardDistance = 0;
        setNavMode("hero");
      } else {
        const delta = currentY - lastY;
        if (delta > 3) {
          upwardDistance = 0;
          setNavMode("hidden");
        } else if (delta < -1) {
          upwardDistance += Math.abs(delta);
          if (upwardDistance >= 8) setNavMode("visible");
        }
      }

      lastY = currentY;
    }

    window.addEventListener("scroll", updateNavigation, { passive: true });
    updateNavigation();
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  function changeLanguage(next: Language) {
    pendingLanguage.current = next;
    if (isLanguageTransitioning) return;
    if (next === language) return;

    const applyLanguage = () => {
      const anchor = [...document.querySelectorAll("section, footer")].find(el => el.getBoundingClientRect().bottom > 100);
      if (anchor) scrollAnchor.current = { element: anchor, top: anchor.getBoundingClientRect().top };
      const selected = pendingLanguage.current;
      setLanguage(selected);
      try { window.localStorage.setItem("portfolio-language", selected); } catch {}
      document.documentElement.lang = selected;
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyLanguage();
      return;
    }
    setIsLanguageTransitioning(true);
    languageChangeTimer.current = setTimeout(applyLanguage, 180);
    languageFinishTimer.current = setTimeout(() => {
      setIsLanguageTransitioning(false);
    }, 420);
  }

  return (
    <main data-language={language} data-language-transitioning={isLanguageTransitioning || undefined}>
      <div className={`languageWipe${isLanguageTransitioning ? " languageWipe--active" : ""}`} aria-hidden="true" />
      <a className="skipLink" href="#work">{t.skip}</a>
      <div className="navSlot">
      <div className={`navBar navBar--${navMode}`} onFocusCapture={() => setNavMode("visible")}>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="BozemenOfficial — home">BO<span>.</span></a>
        <div className="navLinks"><a href="#work">{t.nav.work}</a><a href="#services">{t.nav.services}</a><a href="#about">{t.nav.about}</a></div>
        <div className="navActions">
          <div className="languageSwitch" aria-label="Language selector" aria-busy={isLanguageTransitioning || undefined}>
            {languages.map(({ code, label, title }) => <button key={code} type="button" title={title} aria-label={title} aria-pressed={language === code} onClick={() => changeLanguage(code)}>{label}</button>)}
          </div>
          <a className="navCta" href="mailto:nikolasdusyk.99@gmail.com">{t.nav.talk} <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
      </div>
      </div>

      <section className="hero shell" id="top">
        <div className="heroMain">
          <p className="eyebrow"><span /> {t.available}</p>
          <h1>{t.heroTitle}<br />{t.heroConnector} <em>{t.heroEmphasis}</em></h1>
          <p className="heroCopy">{t.heroCopy}</p>
          <div className="heroActions"><a className="button primary" href="#work">{t.viewWork} <span>↓</span></a><a className="button secondary" href="mailto:nikolasdusyk.99@gmail.com">{t.email}</a></div>
        </div>
        <aside className="heroAside" aria-label="Developer profile summary">
          <div className="portraitFrame">
            <div className="heroMeta"><span>{t.based}</span><span>{t.remote}</span></div>
            <div className="avatarWrap"><Image src="https://github.com/BozemenOfficial.png?size=512" alt="BozemenOfficial GitHub profile photo" width={250} height={250} fetchPriority="high" unoptimized referrerPolicy="no-referrer" /></div>
          </div>
          <div className="statusCard"><span className="statusDot" /><div><b>Bozemen</b><small>{t.role}</small></div></div>
        </aside>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHead"><div><p className="kicker">{t.selectedWork}</p><h2>{t.projectHeading}<br /><span>{t.projectAccent}</span></h2></div><p>{t.projectIntro}</p></div>
        <ProjectCard name="NovaShop" number={1} image="novashop-cover.webp" alt="NovaShop full-stack e-commerce interface" width={1295} height={831} description={t.projectDescription} features={t.features} tags={["React", "TypeScript", "SQLite"]} href="https://github.com/BozemenOfficial/novashop" link={t.viewProject} notes={[{title:t.caseTask,text:t.caseTaskText},{title:t.caseRole,text:t.caseRoleText}]} />
        <ProjectCard name="Traflume" number={2} image="traflume-preview.jpg" alt={traflume.illustration} width={1903} height={951} description={traflume.description} features={traflume.features} tags={["React", "JavaScript", "CSS", "Vite", "Motion", "Three.js", "Node.js", "SQLite", "Drizzle ORM", "Python", "aiogram"]} href="https://traflume.org" link={traflume.link} />
      </section>

      <section className="skillsSection shell" aria-labelledby="skills-title">
        <h2 id="skills-title">{t.stackHeading}</h2>
        <ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
      </section>

      <section className="servicesSection" id="services"><div className="shell">
        <div className="sectionHead light"><div><p className="kicker">{t.servicesKicker}</p><h2>{t.servicesHeading}<br /><span>{t.servicesAccent}</span></h2></div><p>{t.servicesIntro}</p></div>
        <div className="serviceGrid">{t.services.map(([title, text], index) => <article className="service" key={title}><span className="serviceNumber">{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="about section shell" id="about">
        <div className="aboutLabel"><span>{t.about}</span><i /></div>
        <div className="aboutContent"><h2>{t.aboutHeading}<br /><em>{t.aboutAccent}</em></h2><div className="aboutColumns"><p>{t.aboutOne}</p><p>{t.aboutTwo}</p></div><div className="principles">{t.principles.map((principle, index) => <div key={principle}><b>{index + 1}</b><span>{principle}</span></div>)}</div></div>
      </section>

      <footer>
        <div className="shell footerMain"><p className="kicker">{t.contactKicker}</p><h2>{t.contactHeading}<br /><em>{t.contactAccent}</em></h2><a className="footerEmail" href="mailto:nikolasdusyk.99@gmail.com">nikolasdusyk.99@gmail.com <span>↗</span></a></div>
        <div className="shell footerBottom"><span>© 2026 BozemenOfficial</span><a href="https://github.com/BozemenOfficial" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://t.me/BozemenOfficial" target="_blank" rel="noreferrer">Telegram ↗</a><a href="#top">{t.back} ↑</a></div>
      </footer>
    </main>
  );
}
