export interface Dictionary {
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    home: string;
    about: string;
    programs: string;
    trainers: string;
    gallery: string;
    contact: string;
    joinNow: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    learnMore: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  programs: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
      duration: string;
    }>;
    viewAll: string;
  };
  trainers: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      specialty: string;
    }>;
    viewAll: string;
  };
  stats: {
    members: string;
    trainers: string;
    programs: string;
    years: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    rights: string;
    address: string;
    email: string;
    phone: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    info: {
      title: string;
      address: string;
      email: string;
      phone: string;
    };
  };
  theme: {
    light: string;
    dark: string;
    system: string;
    toggle: string;
  };
  language: {
    switchTo: string;
    current: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    viewAll: string;
    backToHome: string;
  };
}
