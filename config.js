/**
 * ⚙️ ZRIMA PLUS - CONFIGURATION MODULE
 * הגדרות מלאות של המערכת
 * 
 * כולל:
 * - פרטי חברה
 * - צבעים וערכות
 * - תוכניות מנוי
 * - הגדרות PDF
 * - הגדרות שדות
 * - תבניות מייל
 * - WhatsApp
 * - אזור זמן ישראל
 * - שפות (עברית + אנגלית)
 * - PWA settings
 */

const ZrimaPlusConfig = {
    
    /**
     * 🏢 Company Details
     */
    company: {
        name: 'זרימה פלוס',
        nameEn: 'Zrima Plus',
        slogan: 'תן לכסף שלך לזרום',
        sloganEn: 'Let Your Money Flow',
        website: 'www.zrima-plus.co.il',
        email: 'info@zrima-plus.co.il',
        supportEmail: 'support@zrima-plus.co.il',
        phone: '03-1234567', // NOT the personal WhatsApp number!
        address: 'תל אביב, ישראל',
        // WhatsApp for system use - NOT displayed publicly
        whatsappBusiness: '972556765809',
        // License Key
        licenseKey: 'SIG-2024-TEST-DEMO'
    },
    
    /**
     * 🎨 Color Schemes
     */
    colorSchemes: {
        'זרימה פלוס': {
            primary: '#00BCD4',      // טורקיז
            secondary: '#FFD700',    // זהב
            accent: '#FF6B6B',       // אדום עדין
            success: '#4CAF50',      // ירוק
            warning: '#FF9800',      // כתום
            danger: '#F44336',       // אדום
            dark: '#212121',         // שחור
            light: '#FAFAFA'         // לבן
        },
        'קלאסי': {
            primary: '#1E3A8A',      // כחול כהה
            secondary: '#C0C0C0',    // כסף
            accent: '#60A5FA',       // כחול בהיר
            success: '#4CAF50',
            warning: '#FF9800',
            danger: '#F44336',
            dark: '#1F2937',
            light: '#F9FAFB'
        },
        'אלגנט': {
            primary: '#000000',      // שחור
            secondary: '#FFD700',    // זהב
            accent: '#808080',       // אפור
            success: '#4CAF50',
            warning: '#FF9800',
            danger: '#F44336',
            dark: '#000000',
            light: '#FFFFFF'
        },
        'טבע': {
            primary: '#22C55E',      // ירוק
            secondary: '#92400E',    // חום
            accent: '#86EFAC',       // ירוק בהיר
            success: '#4ADE80',
            warning: '#F59E0B',
            danger: '#EF4444',
            dark: '#1C1917',
            light: '#FAFAF9'
        }
    },
    
    /**
     * 💰 Subscription Plans
     */
    plans: {
        basic: {
            name: 'בסיסי',
            nameEn: 'Basic',
            price: 199,
            currency: '₪',
            period: 'חודש',
            features: {
                documents: 30,
                users: 1,
                history: 6, // months
                support: 'מייל (24 שעות)',
                branding: 'לוגו אישי',
                reminders: false,
                templates: false,
                api: false,
                accountManager: false
            },
            color: '#94A3B8'
        },
        advanced: {
            name: 'מתקדם',
            nameEn: 'Advanced',
            price: 399,
            currency: '₪',
            period: 'חודש',
            popular: true,
            features: {
                documents: 100,
                users: 3,
                history: -1, // unlimited
                support: 'מייל (12 שעות) + WhatsApp (24 שעות)',
                branding: 'לוגו + צבעים מותאמים',
                reminders: true,
                templates: true,
                integration: 'Gmail',
                api: false,
                accountManager: false
            },
            color: '#3B82F6'
        },
        business: {
            name: 'עסקי',
            nameEn: 'Business',
            price: 799,
            currency: '₪',
            period: 'חודש',
            features: {
                documents: -1, // unlimited
                users: 10,
                history: -1,
                support: 'טלפון (2 שעות)',
                branding: 'עיצוב מלא מותאם',
                reminders: true,
                templates: true,
                integration: 'Gmail + Zapier',
                api: true,
                accountManager: true
            },
            color: '#8B5CF6'
        },
        enterprise: {
            name: 'אנטרפרייז',
            nameEn: 'Enterprise',
            price: 1999,
            currency: '₪',
            period: 'חודש',
            features: {
                documents: -1,
                users: -1,
                history: -1,
                support: 'תמיכה מיידית',
                branding: 'התאמות מיוחדות',
                reminders: true,
                templates: true,
                integration: 'הכל',
                api: true,
                accountManager: true,
                customization: true
            },
            color: '#EC4899'
        }
    },
    
    /**
     * 💳 Pay Per Use
     */
    payPerUse: {
        tier1: { min: 1, max: 10, price: 15 },
        tier2: { min: 11, max: 50, price: 12 },
        tier3: { min: 51, max: 999999, price: 10 }
    },
    
    /**
     * 📄 PDF Settings
     */
    pdf: {
        maxSizeMB: 50,
        allowedTypes: ['application/pdf'],
        quality: 1.5, // render quality
        scale: 1.5,
        encoding: 'UTF-8' // CRITICAL for Hebrew!
    },
    
    /**
     * 📝 Field Types
     */
    fieldTypes: {
        signature: {
            name: 'חתימה',
            nameEn: 'Signature',
            icon: '✍️',
            color: '#00BCD4',
            required: true,
            validation: null
        },
        name: {
            name: 'שם מלא',
            nameEn: 'Full Name',
            icon: '👤',
            color: '#4CAF50',
            required: true,
            validation: 'text'
        },
        email: {
            name: 'מייל',
            nameEn: 'Email',
            icon: '📧',
            color: '#FF9800',
            required: false,
            validation: 'email'
        },
        phone: {
            name: 'טלפון',
            nameEn: 'Phone',
            icon: '📱',
            color: '#9C27B0',
            required: false,
            validation: 'phone'
        },
        idNumber: {
            name: 'תעודת זהות',
            nameEn: 'ID Number',
            icon: '🆔',
            color: '#F44336',
            required: false,
            validation: 'israeliID'
        },
        date: {
            name: 'תאריך',
            nameEn: 'Date',
            icon: '📅',
            color: '#2196F3',
            required: false,
            validation: 'date'
        },
        custom: {
            name: 'שדה מותאם',
            nameEn: 'Custom Field',
            icon: '📝',
            color: '#607D8B',
            required: false,
            validation: 'text'
        }
    },
    
    /**
     * ⏱️ Expiration Options
     */
    expirationOptions: [
        { value: 7, label: '7 ימים' },
        { value: 14, label: '14 ימים' },
        { value: 30, label: '30 ימים' },
        { value: 90, label: '90 ימים' },
        { value: -1, label: 'ללא תוקף' }
    ],
    
    /**
     * 🔐 Identity Verification Methods
     */
    verificationMethods: {
        none: { name: 'ללא אימות', nameEn: 'No Verification' },
        sms: { name: 'SMS', nameEn: 'SMS' },
        email: { name: 'מייל', nameEn: 'Email' },
        password: { name: 'סיסמה', nameEn: 'Password' }
    },
    
    /**
     * 📊 Document Statuses
     */
    documentStatuses: {
        created: {
            name: 'נוצר',
            nameEn: 'Created',
            color: '#94A3B8',
            icon: '📄'
        },
        sent: {
            name: 'נשלח',
            nameEn: 'Sent',
            color: '#3B82F6',
            icon: '✉️'
        },
        viewed: {
            name: 'נצפה',
            nameEn: 'Viewed',
            color: '#F59E0B',
            icon: '👁️'
        },
        signed: {
            name: 'נחתם',
            nameEn: 'Signed',
            color: '#10B981',
            icon: '✅'
        },
        expired: {
            name: 'פג תוקף',
            nameEn: 'Expired',
            color: '#EF4444',
            icon: '⏰'
        },
        rejected: {
            name: 'נדחה',
            nameEn: 'Rejected',
            color: '#DC2626',
            icon: '❌'
        }
    },
    
    /**
     * 📧 Email Templates
     */
    emailTemplates: {
        invitation: {
            subject: 'זרימה פלוס - אנא חתום על המסמך',
            subjectEn: 'Zrima Plus - Please Sign Document',
            body: `
שלום {{recipientName}},

קיבלת מסמך לחתימה מ-{{senderName}}.

{{personalMessage}}

לחתימה על המסמך, לחץ על הקישור:
{{signatureLink}}

המסמך תקף עד: {{expirationDate}}

בברכה,
זרימה פלוס
            `
        },
        reminder: {
            subject: 'תזכורת - חתימה על מסמך',
            subjectEn: 'Reminder - Document Signature',
            body: `
שלום {{recipientName}},

זוהי תזכורת לחתום על המסמך "{{documentName}}".

לחתימה, לחץ על הקישור:
{{signatureLink}}

המסמך יפוג ב: {{expirationDate}}

בברכה,
זרימה פלוס
            `
        },
        completed: {
            subject: 'המסמך נחתם בהצלחה!',
            subjectEn: 'Document Signed Successfully!',
            body: `
שלום {{senderName}},

המסמך "{{documentName}}" נחתם על ידי {{recipientName}}.

תאריך חתימה: {{signedDate}}

המסמך החתום מצורף למייל.

בברכה,
זרימה פלוס
            `
        }
    },
    
    /**
     * 💬 WhatsApp Templates
     */
    whatsappTemplates: {
        invitation: `
שלום *{{recipientName}}*,

קיבלת מסמך לחתימה מ-*{{senderName}}*.

{{personalMessage}}

לחתימה: {{signatureLink}}

תקף עד: {{expirationDate}}

_זרימה פלוס - תן לכסף שלך לזרום_
        `,
        reminder: `
🔔 *תזכורת*

שלום {{recipientName}},
אנא חתום על המסמך "{{documentName}}".

לחתימה: {{signatureLink}}

יפוג ב: {{expirationDate}}

_זרימה פלוס_
        `
    },
    
    /**
     * 🌐 Locale Settings
     */
    locale: {
        timezone: 'Asia/Jerusalem',
        language: 'he',
        direction: 'rtl',
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'HH:mm',
        currency: '₪'
    },
    
    /**
     * 🎨 Fonts
     */
    fonts: {
        primary: 'Heebo',
        secondary: 'Assistant',
        googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&family=Assistant:wght@300;400;600;700&display=swap'
    },
    
    /**
     * 📱 PWA Settings
     */
    pwa: {
        name: 'זרימה פלוס',
        shortName: 'Zrima+',
        description: 'מערכת חתימות דיגיטליות',
        themeColor: '#00BCD4',
        backgroundColor: '#FFFFFF',
        display: 'standalone',
        orientation: 'portrait'
    },
    
    /**
     * 🔧 System Settings
     */
    system: {
        version: '3.0.0',
        buildDate: '2024-11-21',
        apiVersion: 'v1',
        maxHistoryItems: 1000,
        autoSaveInterval: 30000, // 30 seconds
        sessionTimeout: 86400000, // 24 hours
        enableAnalytics: true,
        enableErrorTracking: true
    },
    
    /**
     * 🎯 Default Settings
     */
    defaults: {
        colorScheme: 'זרימה פלוס',
        expirationDays: 14,
        verification: 'none',
        language: 'he',
        notifications: true,
        autoReminders: true,
        reminderDays: 3
    },
    
    /**
     * 🚀 Feature Flags
     */
    features: {
        multiPartySigning: true,
        bulkSender: true,
        videoSigning: false, // Coming soon
        templates: true,
        whiteLabel: true,
        affiliateSystem: true,
        payments: true,
        aiAnalyzer: false, // Coming soon
        zapierIntegration: true,
        googleDriveSync: true
    },
    
    /**
     * 📊 Analytics Events
     */
    analyticsEvents: {
        documentCreated: 'document_created',
        documentSent: 'document_sent',
        documentViewed: 'document_viewed',
        documentSigned: 'document_signed',
        documentExpired: 'document_expired',
        userSignedUp: 'user_signed_up',
        planUpgraded: 'plan_upgraded'
    },
    
    /**
     * 🎨 Animation Settings
     */
    animations: {
        duration: 300, // ms
        easing: 'ease-in-out'
    },
    
    /**
     * 📐 UI Settings
     */
    ui: {
        borderRadius: '8px',
        shadowSm: '0 1px 2px 0 rgba(0,0,0,0.05)',
        shadowMd: '0 4px 6px -1px rgba(0,0,0,0.1)',
        shadowLg: '0 10px 15px -3px rgba(0,0,0,0.1)',
        breakpoints: {
            mobile: 320,
            tablet: 768,
            desktop: 1024,
            wide: 1280
        }
    }
};

/**
 * 🔧 Helper Functions
 */
ZrimaPlusConfig.getActiveColorScheme = function() {
    const schemeName = localStorage.getItem('colorScheme') || this.defaults.colorScheme;
    return this.colorSchemes[schemeName] || this.colorSchemes['זרימה פלוס'];
};

ZrimaPlusConfig.setColorScheme = function(schemeName) {
    if (this.colorSchemes[schemeName]) {
        localStorage.setItem('colorScheme', schemeName);
        this.applyColorScheme();
    }
};

ZrimaPlusConfig.applyColorScheme = function() {
    const colors = this.getActiveColorScheme();
    const root = document.documentElement;
    
    Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value);
    });
};

ZrimaPlusConfig.formatCurrency = function(amount) {
    return `${this.locale.currency}${amount.toLocaleString('he-IL')}`;
};

ZrimaPlusConfig.formatDate = function(date) {
    return new Date(date).toLocaleDateString('he-IL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

ZrimaPlusConfig.formatTime = function(date) {
    return new Date(date).toLocaleTimeString('he-IL', {
        hour: '2-digit',
        minute: '2-digit'
    });
};

ZrimaPlusConfig.formatDateTime = function(date) {
    return `${this.formatDate(date)} ${this.formatTime(date)}`;
};

// Make available globally
window.ZrimaPlusConfig = ZrimaPlusConfig;

console.log('✅ Configuration Module Loaded');
console.log('🎨 Active Color Scheme:', ZrimaPlusConfig.getActiveColorScheme());
