/*
 * =====================================================================================
 * DISCLAIMER:
 * =====================================================================================
 * This localization file is a community contribution and is not officially maintained
 * by Clerk. It has been provided by the community and may not be fully aligned
 * with the current or future states of the main application. Clerk does not guarantee
 * the accuracy, completeness, or timeliness of the translations in this file.
 * Use of this file is at your own risk and discretion.
 * =====================================================================================
 */

import type { LocalizationResource } from '@clerk/types';

export const svSE: LocalizationResource = {
  locale: 'sv-SE',
  backButton: 'Tillbaka',
  badge__default: 'Standard',
  badge__otherImpersonatorDevice: 'Annans imitatörenhet',
  badge__primary: 'Primär',
  badge__requiresAction: 'Kräver åtgärd',
  badge__thisDevice: 'Den här enheten',
  badge__unverified: 'Overifierad',
  badge__userDevice: 'Användarens enhet',
  badge__you: 'Du',
  createOrganization: {
    formButtonSubmit: 'Skapa organisation',
    invitePage: {
      formButtonReset: 'Hoppa över',
    },
    title: 'Skapa organisation',
  },
  dates: {
    lastDay: "Igår klockan {{ date | timeString('sv-SE') }}",
    next6Days:
      "{{ date | weekday('sv-SE','long') }} klockan {{ date | timeString('sv-SE') }}",
    nextDay: "Imorgon klockan {{ date | timeString('sv-SE') }}",
    numeric: "{{ date | numeric('sv-SE') }}",
    previous6Days:
      "Senaste {{ date | weekday('sv-SE','long') }} klockan {{ date | timeString('sv-SE') }}",
    sameDay: "Idag klockan {{ date | timeString('sv-SE') }}",
  },
  dividerText: 'eller',
  footerActionLink__useAnotherMethod: 'Använd en annan metod',
  footerPageLink__help: 'Hjälp',
  footerPageLink__privacy: 'Integritet',
  footerPageLink__terms: 'Villkor',
  formButtonPrimary: 'Fortsätt',
  formButtonPrimary__verify: 'Verify',
  formFieldAction__forgotPassword: 'Glömt lösenord?',
  formFieldError__matchingPasswords: 'Lösenorden matchar.',
  formFieldError__notMatchingPasswords: 'Lösenorden matchar inte.',
  formFieldError__verificationLinkExpired:
    'Verifieringslänken har löpt ut. Vänligen begär en ny länk.',
  formFieldHintText__optional: 'Valfritt',
  formFieldHintText__slug:
    'En slug är ett läsbart ID som måste vara unikt. Det används ofta i URL:er.',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'Radera konto',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__emailAddresses:
    'Ange eller klistra in en eller flera e-postadresser, separerade med mellanslag eller kommatecken',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldLabel__automaticInvitations:
    'Enable automatic invitations for this domain',
  formFieldLabel__backupCode: 'Reserv-kod',
  formFieldLabel__confirmDeletion: 'Confirmation',
  formFieldLabel__confirmPassword: 'Bekräfta lösenord',
  formFieldLabel__currentPassword: 'Nuvarande lösenord',
  formFieldLabel__emailAddress: 'E-postadress',
  formFieldLabel__emailAddress_username: 'E-postadress eller användarnamn',
  formFieldLabel__emailAddresses: 'E-postadresser',
  formFieldLabel__firstName: 'Förnamn',
  formFieldLabel__lastName: 'Efternamn',
  formFieldLabel__newPassword: 'Nytt lösenord',
  formFieldLabel__organizationDomain: 'Domain',
  formFieldLabel__organizationDomainDeletePending:
    'Delete pending invitations and suggestions',
  formFieldLabel__organizationDomainEmailAddress: 'Verification email address',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Enter an email address under this domain to receive a code and verify this domain.',
  formFieldLabel__organizationName: 'Organisationsnamn',
  formFieldLabel__organizationSlug: 'Slug',
  formFieldLabel__passkeyName: undefined,
  formFieldLabel__password: 'Lösenord',
  formFieldLabel__phoneNumber: 'Telefonnummer',
  formFieldLabel__role: 'Roll',
  formFieldLabel__signOutOfOtherSessions: 'Logga ut från alla andra enheter',
  formFieldLabel__username: 'Användarnamn',
  impersonationFab: {
    action__signOut: 'Logga ut',
    title: 'Inloggad som {{identifier}}',
  },
  maintenanceMode: undefined,
  membershipRole__admin: 'Admin',
  membershipRole__basicMember: 'Medlem',
  membershipRole__guestMember: 'Gäst',
  organizationList: {
    action__createOrganization: 'Skapa organisation',
    action__invitationAccept: 'Gå med',
    action__suggestionsAccept: 'Be om att gå med',
    createOrganization: 'Skapa Organisation',
    invitationAcceptedLabel: 'Gått med',
    subtitle: 'för att fortsätta till {{applicationName}}',
    suggestionsAcceptedLabel: 'Väntar godkännande',
    title: 'Välj ett konto',
    titleWithoutPersonal: 'Välj en organisation',
  },
  organizationProfile: {
    badge__automaticInvitation: 'Automatiska inbjudningar',
    badge__automaticSuggestion: 'Automatiska förslag',
    badge__manualInvitation: 'Ingen automatisk registrering',
    badge__unverified: 'Overifierad',
    createDomainPage: {
      subtitle:
        'Lägg till domänen för att verifiera. Användare med e-postadresser i denna domän kan gå med i organisationen automatiskt eller begära att få gå med.',
      title: 'Lägg till domän',
    },
    invitePage: {
      detailsTitle__inviteFailed:
        'Inbjudningarna kunde inte skickas. Åtgärda följande och försök igen:',
      formButtonPrimary__continue: 'Skicka inbjudningar',
      selectDropdown__role: 'Select role',
      subtitle: 'Bjud in nya medlemmar till denna organisation',
      successMessage: 'Inbjudningar skickade',
      title: 'Bjud in medlemmar',
    },
    membersPage: {
      action__invite: 'Bjud in',
      activeMembersTab: {
        menuAction__remove: 'Ta bort medlem',
        tableHeader__actions: '',
        tableHeader__joined: 'Gick med',
        tableHeader__role: 'Roll',
        tableHeader__user: 'Användare',
      },
      detailsTitle__emptyRow: 'Inga medlemmar att visa',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'Bjud in användare genom att koppla en e-postdomän till din organisation. Alla som registrerar sig med en matchande e-postdomän kommer att kunna gå med i organisationen när som helst.',
          headerTitle: 'Automatiska inbjudningar',
          primaryButton: 'Hantera verifierade domäner',
        },
        table__emptyRow: 'Inga inbjudningar att visa',
      },
      invitedMembersTab: {
        menuAction__revoke: 'Återkalla inbjudan',
        tableHeader__invited: 'Inbjudna',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'Användare som registrerar sig med en matchande e-postdomän kommer att kunna se ett förslag om att begära att gå med i din organisation.',
          headerTitle: 'Automatiska förslag',
          primaryButton: 'Hantera verifierade domäner',
        },
        menuAction__approve: 'Godkänn',
        menuAction__reject: 'Avvisa',
        tableHeader__requested: 'Begärd åtkomst',
        table__emptyRow: 'Inga förfrågningar att visa',
      },
      start: {
        headerTitle__invitations: 'Inbjudningar',
        headerTitle__members: 'Medlemmar',
        headerTitle__requests: 'Förfrågningar',
      },
    },
    navbar: {
      description: 'Hantera din organisation.',
      general: 'Allmänna inställningar',
      members: 'Medlemar',
      title: 'Organisation',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription:
            'Skriv "{{organizationName}}" nedan för att fortsätta.',
          messageLine1: 'Är du säker på att du vill radera denna organisation?',
          messageLine2: 'Denna åtgärd är permanent och kan inte ångras.',
          successMessage: 'Du har raderat organisationen.',
          title: 'Radera organisation',
        },
        leaveOrganization: {
          actionDescription:
            'Skriv "{{organizationName}}" nedan för att fortsätta.',
          messageLine1:
            'Är du säker på att du vill lämna denna organisation? Du kommer att förlora åtkomst till organisationen och dess applikationer.',
          messageLine2: 'Denna åtgärd är permanent och oåterkallelig.',
          successMessage: 'Du har lämnat organisationen.',
          title: 'Lämna organisation',
        },
        title: 'Farligt',
      },
      domainSection: {
        menuAction__manage: 'Hantera',
        menuAction__remove: 'Radera',
        menuAction__verify: 'Verifiera',
        primaryButton: 'Lägg till domän',
        subtitle:
          'Tillåt användare att gå med i organisationen automatiskt eller begära att gå med baserat på en verifierad e-postdomän.',
        title: 'Verifierade domäner',
      },
      successMessage: 'Organisationen har uppdaterats.',
      title: 'Organisationsprofil',
    },
    removeDomainPage: {
      messageLine1: 'E-postdomänen {{domain}} kommer att tas bort.',
      messageLine2:
        'Användare kommer inte att kunna gå med i organisationen automatiskt efter detta.',
      successMessage: '{{domain}} har tagits bort.',
      title: 'Ta bort domän',
    },
    start: {
      headerTitle__general: 'Allmänna inställningar',
      headerTitle__members: 'Medlemmar',
      profileSection: {
        primaryButton: '',
        title: 'Organisationsprofil',
        uploadAction__title: 'Logo',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel:
          'Att ta bort denna domän kommer att påverka inbjudna användare.',
        removeDomainActionLabel__remove: 'Ta bort domän',
        removeDomainSubtitle:
          'Ta bort denna domän från dina verifierade domäner',
        removeDomainTitle: 'Ta bort domän',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'Användare bjuds automatiskt in att gå med i organisationen när de registrerar sig och kan gå med när som helst.',
        automaticInvitationOption__label: 'Automatiska inbjudningar',
        automaticSuggestionOption__description:
          'Användare får ett förslag om att begära att få gå med, men måste godkännas av en administratör innan de kan gå med i organisationen.',
        automaticSuggestionOption__label: 'Automatiska förslag',
        calloutInfoLabel:
          'Att ändra registreringsläget kommer endast att påverka nya användare.',
        calloutInvitationCountLabel:
          'Väntande inbjudningar skickade till användare: {{count}}',
        calloutSuggestionCountLabel:
          'Väntande förslag skickade till användare: {{count}}',
        manualInvitationOption__description:
          'Användare kan endast bjudas in manuellt till organisationen.',
        manualInvitationOption__label: 'Ingen automatisk registrering',
        subtitle:
          'Välj hur användare från denna domän kan gå med i organisationen.',
      },
      start: {
        headerTitle__danger: 'Fara',
        headerTitle__enrollment: 'Registreringsalternativ',
      },
      subtitle:
        'Domänen {{domain}} är nu verifierad. Fortsätt genom att välja registreringsläge.',
      title: 'Uppdatera {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle: 'Ange verifieringskoden som skickats till din e-postadress',
      formTitle: 'Verifieringskod',
      resendButton: 'Fick du inte koden? Skicka igen',
      subtitle: 'Domänen {{domainName}} behöver verifieras via e-post.',
      subtitleVerificationCodeScreen:
        'En verifieringskod skickades till {{emailAddress}}. Ange koden för att fortsätta.',
      title: 'Verifiera domän',
    },
  },
  organizationSwitcher: {
    action__createOrganization: 'Skapa organisation',
    action__invitationAccept: 'Join',
    action__manageOrganization: 'Hantera organisation',
    action__suggestionsAccept: 'Request to join',
    notSelected: 'Ingen organisation vald',
    personalWorkspace: 'Personligt Arbetsområde',
    suggestionsAcceptedLabel: 'Pending approval',
  },
  paginationButton__next: 'Nästa',
  paginationButton__previous: 'Föregående',
  paginationRowText__displaying: 'Visar',
  paginationRowText__of: 'av',
  signIn: {
    accountSwitcher: {
      action__addAccount: 'Lägg till konto',
      action__signOutAll: 'Logga ut från alla konton',
      subtitle: 'Välj det konto du vill fortsätta med',
      title: 'Välj ett konto',
    },
    alternativeMethods: {
      actionLink: 'Få hjälp',
      actionText: 'Saknar du någon av dessa?',
      blockButton__backupCode: 'Använd en reservkod',
      blockButton__emailCode: 'Skicka kod till {{identifier}}',
      blockButton__emailLink: 'Skicka länk till {{identifier}}',
      blockButton__passkey: undefined,
      blockButton__password: 'Logga in med ditt lösenord',
      blockButton__phoneCode: 'Skicka kod till {{identifier}}',
      blockButton__totp: 'Använd din autentiseringsapp',
      getHelp: {
        blockButton__emailSupport: 'E-post support',
        content:
          'Om du har problem med att logga in på ditt konto, kontakta oss via e-post så hjälper vi dig att återställa åtkomsten så snabbt som möjligt.',
        title: 'Få hjälp',
      },
      subtitle:
        'Har du problem? Du kan använda någon av dessa metoder för att logga in.',
      title: 'Använd en annan metod',
    },
    backupCodeMfa: {
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Ange en reservkod',
    },
    emailCode: {
      formTitle: 'Verifieringskod',
      resendButton: 'Skicka koden igen',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Kontrollera din e-post',
    },
    emailLink: {
      expired: {
        subtitle: 'Återgå till ursprungliga fliken för att fortsätta.',
        title: 'Denna verifieringslänk har upphört att gälla',
      },
      failed: {
        subtitle: 'Återgå till ursprungliga fliken för att fortsätta.',
        title: 'Denna verifieringslänk är ogiltig',
      },
      formSubtitle:
        'Använd verifieringslänken som skickades till din e-postadress',
      formTitle: 'Verifieringslänk',
      loading: {
        subtitle: 'Du kommer att omdirigeras snart',
        title: 'Loggar in...',
      },
      resendButton: 'Skicka länken igen',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Kontrollera din e-post',
      unusedTab: {
        title: 'Du kan stänga den här fliken',
      },
      verified: {
        subtitle: 'Du kommer att omdirigeras snart',
        title: 'Inloggningen lyckades',
      },
      verifiedSwitchTab: {
        subtitle: 'Återgå till ursprungliga fliken för att fortsätta',
        subtitleNewTab:
          'Återgå till den nyligen öppnade fliken för att fortsätta',
        titleNewTab: 'Loggade in på annan flik',
      },
    },
    forgotPassword: {
      formTitle: 'Återställ lösenordskod',
      resendButton: 'Fick du inte en kod? Skicka igen',
      subtitle: 'för att återställa ditt lösenord',
      subtitle_email: 'Först, ange koden som skickats till din e-postadress',
      subtitle_phone: 'Först, ange koden som skickats till din telefon',
      title: 'Återställ lösenord',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'Återställ ditt lösenord',
      label__alternativeMethods: 'Eller, logga in med en annan metod',
      title: 'Glömt lösenord?',
    },
    noAvailableMethods: {
      message:
        'Kan inte fortsätta med inloggning. Det finns ingen tillgänglig autentiseringsfaktor.',
      subtitle: 'Ett fel inträffade',
      title: 'Kan inte logga in',
    },
    passkey: {
      subtitle: undefined,
      title: undefined,
    },
    password: {
      actionLink: 'Använd en annan metod',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Ange ditt lösenord',
    },
    passwordPwned: {
      title: undefined,
    },
    phoneCode: {
      formTitle: 'Verifieringskod',
      resendButton: 'Skicka koden igen',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Kolla din telefon',
    },
    phoneCodeMfa: {
      formTitle: 'Verifieringskod',
      resendButton: 'Skicka koden igen',
      subtitle: '',
      title: 'Kolla din telefon',
    },
    resetPassword: {
      formButtonPrimary: 'Återställ lösenord',
      requiredMessage:
        'Av säkerhetsskäl är det nödvändigt att återställa ditt lösenord.',
      successMessage:
        'Ditt lösenord har ändrats framgångsrikt. Loggar in dig, var god vänta en stund.',
      title: 'Ange nytt lösenord',
    },
    resetPasswordMfa: {
      detailsLabel:
        'Vi behöver verifiera din identitet innan vi återställer ditt lösenord.',
    },
    start: {
      actionLink: 'Skapa konto',
      actionLink__use_email: 'Use email',
      actionLink__use_email_username: 'Use email or username',
      actionLink__use_passkey: undefined,
      actionLink__use_phone: 'Use phone',
      actionLink__use_username: 'Use username',
      actionText: 'Har du inget konto?',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Logga in',
    },
    totpMfa: {
      formTitle: 'Verifieringskod',
      subtitle: '',
      title: 'Tvåstegsverifiering',
    },
  },
  signInEnterPasswordTitle: 'Ange ditt lösenord',
  signUp: {
    continue: {
      actionLink: 'Logga in',
      actionText: 'Har du redan ett konto?',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Fyll i nödvändiga fält',
    },
    emailCode: {
      formSubtitle:
        'Ange verifieringskoden som skickades till din e-postadress',
      formTitle: 'Verifieringskod',
      resendButton: 'Skicka koden igen',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Verifiera din e-post',
    },
    emailLink: {
      formSubtitle:
        'Använd verifieringslänken som skickades till din e-postadress',
      formTitle: 'Verifieringslänk',
      loading: {
        title: 'Registrerar...',
      },
      resendButton: 'Skicka länken igen',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Verifiera din e-post',
      verified: {
        title: 'Registreringen lyckades',
      },
      verifiedSwitchTab: {
        subtitle: 'Återgå till den nyligen öppnade fliken för att fortsätta',
        subtitleNewTab: 'Återgå till föregående flik för att fortsätta',
        title: 'E-posten har verifierats',
      },
    },
    phoneCode: {
      formSubtitle:
        'Ange verifieringskoden som skickades till ditt telefonnummer',
      formTitle: 'Verifieringskod',
      resendButton: 'Skicka koden igen',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Verifiera din telefon',
    },
    start: {
      actionLink: 'Logga in',
      actionText: 'Har du redan ett konto?',
      subtitle: 'för att fortsätta till {{applicationName}}',
      title: 'Skapa ditt konto',
    },
  },
  socialButtonsBlockButton: 'Fortsätt med {{provider|titleize}}',
  unstable__errors: {
    captcha_invalid:
      'Registrering misslyckades på grund av säkerhetskontroller. Vänligen uppdatera sidan och försök igen eller kontakta supporten för mer hjälp.',
    captcha_unavailable:
      'Registrering misslyckades på grund av misslyckad bot-validering. Vänligen uppdatera sidan och försök igen eller kontakta supporten för mer hjälp.',
    form_code_incorrect: 'Koden är felaktig.',
    form_identifier_exists: 'Identifieraren finns redan.',
    form_identifier_exists__email_address: 'E-postadressen finns redan.',
    form_identifier_exists__phone_number: 'Telefonnumret finns redan.',
    form_identifier_exists__username: 'Användarnamnet finns redan.',
    form_identifier_not_found: 'Identifieraren hittades inte.',
    form_param_format_invalid: 'Formatet är ogiltigt.',
    form_param_format_invalid__email_address:
      'E-postadressen måste vara en giltig e-postadress.',
    form_param_format_invalid__phone_number:
      'Telefonnumret måste vara i ett giltigt internationellt format.',
    form_param_max_length_exceeded__first_name:
      'Förnamnet får inte överskrida 256 tecken.',
    form_param_max_length_exceeded__last_name:
      'Efternamnet får inte överskrida 256 tecken.',
    form_param_max_length_exceeded__name:
      'Namnet får inte överskrida 256 tecken.',
    form_param_nil: 'Parametern får inte vara tom.',
    form_password_incorrect: 'Lösenordet är felaktigt.',
    form_password_length_too_short: 'Lösenordet är för kort.',
    form_password_not_strong_enough:
      'Ditt lösenord är inte tillräckligt starkt.',
    form_password_pwned: 'Lösenordet har läckt i tidigare dataintrång.',
    form_password_pwned__sign_in:
      'Lösenordet har läckt, vänligen logga in för att ändra det.',
    form_password_size_in_bytes_exceeded:
      'Ditt lösenord har överskridit det maximala antalet tillåtna bytes, vänligen förkorta det eller ta bort några specialtecken.',
    form_password_validation_failed: 'Felaktigt lösenord',
    form_username_invalid_character:
      'Användarnamnet innehåller ogiltiga tecken.',
    form_username_invalid_length: 'Användarnamnets längd är ogiltig.',
    identification_deletion_failed:
      'Du kan inte ta bort din sista identifiering.',
    not_allowed_access: 'Åtkomst nekad.',
    passkey_already_exists: 'Passnyckeln finns redan.',
    passkey_not_supported: 'Passnyckel stöds inte.',
    passkey_pa_not_supported: 'Passnyckel PA stöds inte.',
    passkey_registration_cancelled: 'Registrering av passnyckel avbruten.',
    passkey_retrieval_cancelled: 'Hämtning av passnyckel avbruten.',
    passwordComplexity: {
      maximumLength: 'Maximal längd',
      minimumLength: 'Minimal längd',
      requireLowercase: 'Kräver små bokstäver',
      requireNumbers: 'Kräver siffror',
      requireSpecialCharacter: 'Kräver specialtecken',
      requireUppercase: 'Kräver stora bokstäver',
      sentencePrefix: 'Lösenordet måste innehålla',
    },
    phone_number_exists:
      'Detta telefonnummer är taget. Vänligen prova ett annat.',
    zxcvbn: {
      couldBeStronger:
        'Ditt lösenord fungerar, men kunde vara starkare. Försök lägga till fler tecken.',
      goodPassword: 'Ditt lösenord uppfyller alla nödvändiga krav.',
      notEnough: 'Ditt lösenord är inte tillräckligt starkt.',
      suggestions: {
        allUppercase: 'Använd stora bokstäver, men inte för alla tecken.',
        anotherWord: 'Lägg till fler ord som är mindre vanliga.',
        associatedYears: 'Undvik år som är associerade med dig.',
        capitalization: 'Använd stor bokstav för mer än det första tecknet.',
        dates: 'Undvik datum och år som är associerade med dig.',
        l33t: "Undvik förutsägbara bokstavsersättningar som '@' för 'a'.",
        longerKeyboardPattern:
          'Använd längre tangentbordsmönster och ändra skrivrättning flera gånger.',
        noNeed:
          'Du kan skapa starka lösenord utan att använda symboler, siffror eller stora bokstäver.',
        pwned:
          'Om du använder detta lösenord någon annanstans bör du ändra det.',
        recentYears: 'Undvik de senaste åren.',
        repeated: 'Undvik upprepade ord och tecken.',
        reverseWords: 'Undvik omvänd stavning av vanliga ord.',
        sequences: 'Undvik vanliga teckenföljder.',
        useWords: 'Använd flera ord, men undvik vanliga fraser.',
      },
      warnings: {
        common: 'Detta är ett vanligt använt lösenord.',
        commonNames: 'Vanliga namn och efternamn är lätta att gissa.',
        dates: 'Datum är lätta att gissa.',
        extendedRepeat:
          'Upprepade teckenmönster som "abcabcabc" är lätta att gissa.',
        keyPattern: 'Korta tangentbordsmönster är lätta att gissa.',
        namesByThemselves: 'Enskilda namn eller efternamn är lätta att gissa.',
        pwned:
          'Ditt lösenord har exponerats genom ett dataintrång på internet.',
        recentYears: 'Senaste åren är lätta att gissa.',
        sequences: 'Vanliga teckenföljder som "abc" är lätta att gissa.',
        similarToCommon: 'Detta liknar ett vanligt använt lösenord.',
        simpleRepeat: 'Upprepade tecken som "aaa" är lätta att gissa.',
        straightRow:
          'Raka rader av tangenter på ditt tangentbord är lätta att gissa.',
        topHundred: 'Detta är ett ofta använt lösenord.',
        topTen: 'Detta är ett mycket använt lösenord.',
        userInputs:
          'Det bör inte finnas några personliga eller sidrelaterade data.',
        wordByItself: 'Enskilda ord är lätta att gissa.',
      },
    },
  },
  userButton: {
    action__addAccount: 'Lägg till konto',
    action__manageAccount: 'Hantera konto',
    action__signOut: 'Logga ut',
    action__signOutAll: 'Logga ut från alla konton',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'Kopierat!',
      actionLabel__copy: 'Kopiera alla',
      actionLabel__download: 'Ladda ner .txt',
      actionLabel__print: 'Skriv ut',
      infoText1: 'Backupkoder kommer att aktiveras för detta konto.',
      infoText2:
        'Håll backupkoderna hemliga och förvara dem säkert. Du kan generera nya backupkoder om du misstänker att de har komprometterats.',
      subtitle__codelist: 'Förvara dem säkert och håll dem hemliga.',
      successMessage:
        'Backupkoder är nu aktiverade. Du kan använda en av dessa för att logga in på ditt konto om du förlorar åtkomsten till din autentiseringsenhet. Varje kod kan endast användas en gång.',
      successSubtitle:
        'Du kan använda en av dessa för att logga in på ditt konto om du förlorar åtkomsten till din autentiseringsenhet.',
      title: 'Lägg till backupkodverifiering',
      title__codelist: 'Backupkoder',
    },
    connectedAccountPage: {
      formHint: 'Välj en leverantör för att ansluta ditt konto.',
      formHint__noAccounts:
        'Det finns inga tillgängliga externa kontoleverantörer.',
      removeResource: {
        messageLine1: '{{identifier}} kommer att tas bort från detta konto.',
        messageLine2:
          'Du kommer inte längre att kunna använda detta anslutna konto och alla beroende funktioner kommer att sluta fungera.',
        successMessage: '{{connectedAccount}} har tagits bort från ditt konto.',
        title: 'Ta bort anslutet konto',
      },
      socialButtonsBlockButton: 'Anslut {{provider|titleize}} konto',
      successMessage: 'Leverantören har lagts till i ditt konto.',
      title: 'Lägg till anslutet konto',
    },
    deletePage: {
      actionDescription: 'Skriv "Radera konto" nedan för att fortsätta.',
      confirm: 'Radera konto',
      messageLine1: 'Är du säker på att du vill radera ditt konto?',
      messageLine2: 'Denna åtgärd är permanent och kan inte ångras.',
      title: 'Radera konto',
    },
    emailAddressPage: {
      emailCode: {
        formHint:
          'Ett e-postmeddelande med en verifieringskod kommer att skickas till denna e-postadress.',
        formSubtitle: 'Ange verifieringskoden som skickats till {{identifier}}',
        formTitle: 'Verifieringskod',
        resendButton: 'Skicka kod igen',
        successMessage:
          'E-postadressen {{identifier}} har lagts till i ditt konto.',
      },
      emailLink: {
        formHint:
          'Ett e-postmeddelande med en verifieringslänk kommer att skickas till denna e-postadress.',
        formSubtitle:
          'Klicka på verifieringslänken i e-postmeddelandet som skickats till {{identifier}}',
        formTitle: 'Verifieringslänk',
        resendButton: 'Skicka länken igen',
        successMessage:
          'E-postadressen {{identifier}} har lagts till i ditt konto.',
      },
      removeResource: {
        messageLine1: '{{identifier}} kommer att tas bort från detta konto.',
        messageLine2:
          'Du kommer inte längre att kunna logga in med denna e-postadress.',
        successMessage: '{{emailAddress}} har tagits bort från ditt konto.',
        title: 'Ta bort e-postadress',
      },
      title: 'Lägg till e-postadress',
      verifyTitle: 'Verify email address',
    },
    formButtonPrimary__add: 'Add',
    formButtonPrimary__continue: 'Fortsätt',
    formButtonPrimary__finish: 'Slutför',
    formButtonPrimary__remove: 'Remove',
    formButtonPrimary__save: 'Save',
    formButtonReset: 'Avbryt',
    mfaPage: {
      formHint: 'Välj en metod att lägga till.',
      title: 'Lägg till tvåstegsverifiering',
    },
    mfaPhoneCodePage: {
      backButton: 'Use existing number',
      primaryButton__addPhoneNumber: 'Lägg till ett telefonnummer',
      removeResource: {
        messageLine1:
          '{{identifier}} kommer inte längre att ta emot verifieringskoder vid inloggning.',
        messageLine2:
          'Ditt konto kan vara mindre säkert. Är du säker på att du vill fortsätta?',
        successMessage:
          'SMS-kod tvåstegsverifiering har tagits bort för {{mfaPhoneCode}}',
        title: 'Ta bort tvåstegsverifiering',
      },
      subtitle__availablePhoneNumbers:
        'Välj ett telefonnummer att registrera för SMS-kod tvåstegsverifiering.',
      subtitle__unavailablePhoneNumbers:
        'Det finns inga tillgängliga telefonnummer att registrera för SMS-kod tvåstegsverifiering.',
      successMessage1:
        'När du loggar in kommer du att behöva ange en verifieringskod som skickats till detta telefonnummer som ett ytterligare steg.',
      successMessage2:
        'Spara dessa säkerhetskoder och förvara dem på ett säkert ställe. Om du förlorar tillgång till din autentiseringsenhet kan du använda säkerhetskoder för att logga in.',
      successTitle: 'SMS-kodsverifiering aktiverad',
      title: 'Lägg till SMS-kodverifiering',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'Skanna QR-kod istället',
        buttonUnableToScan__nonPrimary: 'Kan inte skanna QR-kod?',
        infoText__ableToScan:
          'Konfigurera en ny inloggningsmetod i din autentiseringsapp och skanna följande QR-kod för att länka den till ditt konto.',
        infoText__unableToScan:
          'Konfigurera en ny inloggningsmetod i din autentiseringsapp och ange nyckeln nedan.',
        inputLabel__unableToScan1:
          'Se till att tidsbaserade eller engångslösenord är aktiverade och slutför sedan länkningen till ditt konto.',
        inputLabel__unableToScan2:
          'Alternativt, om din autentiseringsapp stödjer TOTP URI kan du också kopiera hela URI.',
      },
      removeResource: {
        messageLine1:
          'Verifieringskoder från denna autentiseringsapp kommer inte längre att krävas vid inloggning.',
        messageLine2:
          'Ditt konto kan vara mindre säkert. Är du säker på att du vill fortsätta?',
        successMessage:
          'Tvåstegsverifiering via autentiseringsapp har tagits bort.',
        title: 'Ta bort tvåstegsverifiering',
      },
      successMessage:
        'Tvåstegsverifiering är nu aktiverat. Vid inloggning behöver du ange en verifieringskod från denna autentiseringsapp som ett extra steg.',
      title: 'Lägg till autentiseringsapp',
      verifySubtitle:
        'Ange verifieringskoden genererad av din autentiseringsapp',
      verifyTitle: 'Verifieringskod',
    },
    mobileButton__menu: 'Meny',
    navbar: {
      account: 'Profile',
      description: 'Manage your account info.',
      security: 'Security',
      title: 'Account',
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: undefined,
        title: undefined,
      },
      subtitle__rename: undefined,
      title__rename: undefined,
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        'Det rekommenderas att logga ut från alla andra enheter som kan ha använt ditt gamla lösenord.',
      readonly:
        'Ditt lösenord kan för närvarande inte redigeras eftersom du endast kan logga in via företagsanslutningen.',
      successMessage__set: 'Ditt lösenord har angetts.',
      successMessage__signOutOfOtherSessions:
        'Alla andra enheter har loggats ut.',
      successMessage__update: 'Ditt lösenord har uppdaterats.',
      title__set: 'Ange lösenord',
      title__update: 'Byt lösenord',
    },
    phoneNumberPage: {
      infoText:
        'Ett textmeddelande med en verifieringslänk kommer att skickas till detta telefonnummer.',
      removeResource: {
        messageLine1: '{{identifier}} kommer att tas bort från detta konto.',
        messageLine2:
          'Du kommer inte längre att kunna logga in med detta telefonnummer.',
        successMessage: '{{phoneNumber}} har tagits bort från ditt konto.',
        title: 'Ta bort telefonnummer',
      },
      successMessage: '{{identifier}} har lagts till i ditt konto.',
      title: 'Lägg till telefonnummer',
      verifySubtitle: 'Ange verifieringskoden som skickats till {{identifier}}',
      verifyTitle: 'Verifiera telefonnummer',
    },
    profilePage: {
      fileDropAreaHint:
        'Ladda upp en JPG, PNG, GIF, eller WEBP bild som är mindre än 10 MB',
      imageFormDestructiveActionSubtitle: 'Ta bort bild',
      imageFormSubtitle: 'Ladda upp bild',
      imageFormTitle: 'Profilbild',
      readonly:
        'Din profilinformation har tillhandahållits av företagsanslutningen och kan inte redigeras.',
      successMessage: 'Din profil har uppdaterats.',
      title: 'Uppdatera profil',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'Logga ut från enhet',
        title: 'Aktiva enheter',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'Försök igen',
        actionLabel__reauthorize: 'Autorisera nu',
        destructiveActionTitle: 'Ta bort',
        primaryButton: 'Anslut konto',
        subtitle__reauthorize:
          'De nödvändiga behörigheterna har uppdaterats, och du kan uppleva begränsad funktionalitet. Vänligen ge ny auktorisering till denna applikation för att undvika problem',
        title: 'Anslutna konton',
      },
      dangerSection: {
        deleteAccountButton: 'Delete Account',
        title: 'Account termination',
      },
      emailAddressesSection: {
        destructiveAction: 'Ta bort e-postadress',
        detailsAction__nonPrimary: 'Sätt som primär',
        detailsAction__primary: 'Fullborda verifiering',
        detailsAction__unverified: 'Fullborda verifiering',
        primaryButton: 'Lägg till en e-postadress',
        title: 'E-postadresser',
      },
      enterpriseAccountsSection: {
        title: 'Enterprise accounts',
      },
      headerTitle__account: 'Konto',
      headerTitle__security: 'Säkerhet',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'Återgenerera koder',
          headerTitle: 'Säkerhetskopieringskoder',
          subtitle__regenerate:
            'Få en ny uppsättning säkra säkerhetskopieringskoder. Tidigare koder kommer att raderas och kan inte användas.',
          title__regenerate: 'Återgenerera säkerhetskopieringskoder',
        },
        phoneCode: {
          actionLabel__setDefault: 'Ange som standard',
          destructiveActionLabel: 'Ta bort telefonnummer',
        },
        primaryButton: 'Lägg till tvåstegsverifiering',
        title: 'Tvåstegsverifiering',
        totp: {
          destructiveActionTitle: 'Ta bort',
          headerTitle: 'Autentiseringsapp',
        },
      },
      passkeysSection: {
        menuAction__destructive: undefined,
        menuAction__rename: undefined,
        title: undefined,
      },
      passwordSection: {
        primaryButton__setPassword: 'Ställ in lösenord',
        primaryButton__updatePassword: 'Byt lösenord',
        title: 'Lösenord',
      },
      phoneNumbersSection: {
        destructiveAction: 'Ta bort telefonnummer',
        detailsAction__nonPrimary: 'Sätt som primär',
        detailsAction__primary: 'Fullborda verifiering',
        detailsAction__unverified: 'Fullborda verifiering',
        primaryButton: 'Lägg till ett telefonnummer',
        title: 'Telefonnummer',
      },
      profileSection: {
        primaryButton: '',
        title: 'Profil',
      },
      usernameSection: {
        primaryButton__setUsername: 'Sätt användarnamn',
        primaryButton__updateUsername: 'Ändra användarnamn',
        title: 'Användarnamn',
      },
      web3WalletsSection: {
        destructiveAction: 'Ta bort plånbok',
        primaryButton: 'Web3 plånböcker',
        title: 'Web3 plånböcker',
      },
    },
    usernamePage: {
      successMessage: 'Ditt användarnamn har uppdaterats.',
      title__set: 'Uppdatera användarnamn',
      title__update: 'Uppdatera användarnamn',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} kommer att tas bort från detta konto.',
        messageLine2:
          'Du kommer inte längre att kunna logga in med denna web3-plånbok.',
        successMessage: '{{web3Wallet}} har tagits bort från ditt konto.',
        title: 'Ta bort web3-plånbok',
      },
      subtitle__availableWallets:
        'Välj en web3-plånbok att ansluta till ditt konto.',
      subtitle__unavailableWallets:
        'Det finns inga tillgängliga web3-plånböcker.',
      successMessage: 'Plånboken har lagts till i ditt konto.',
      title: 'Lägg till web3-plånbok',
    },
  },
} as const;
