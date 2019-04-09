//@flow

export type TranslationKeyType = "acceptPrivacyPolicyReminder_msg"
	| "acceptPrivacyPolicy_msg"
	| "accountSwitchAdditionalPackagesActive_msg"
	| "accountSwitchTooManyActiveUsers_msg"
	| "accountWasStillCreated_msg"
	| "account_label"
	| "action_label"
	| "activated_label"
	| "activate_action"
	| "activeSessions_label"
	| "active_label"
	| "actor_label"
	| "addCustomDomain_action"
	| "addEmailAlias_label"
	| "addEnumValue_action"
	| "addGroup_label"
	| "addInboxRule_action"
	| "addLanguage_action"
	| "addNext_action"
	| "addOpenOTPApp_action"
	| "addPrevious_action"
	| "addResponsiblePerson_label"
	| "addressesAlreadyInUse_msg"
	| "address_label"
	| "addSecondFactor_action"
	| "addSpamRule_action"
	| "addStatisticsField_action"
	| "addUsers_action"
	| "addUserToGroup_label"
	| "add_action"
	| "adminCustomDomainInfo_msg"
	| "adminCustomDomain_label"
	| "adminDeleteAccount_action"
	| "adminEmailSettings_action"
	| "administratedBy_label"
	| "administratedGroups_label"
	| "administrator_label"
	| "adminMaxNbrOfAliasesReached_msg"
	| "adminPayment_action"
	| "adminPremiumFeatures_action"
	| "adminSettings_label"
	| "adminSpamRuleInfo_msg"
	| "adminSpam_action"
	| "adminSubscription_action"
	| "adminUserList_action"
	| "ageConfirmation_msg"
	| "allowPushNotification_msg"
	| "all_contacts_label"
	| "all_label"
	| "alwaysAsk_action"
	| "amountUsedAndActivatedOf_label"
	| "amountUsedOf_label"
	| "appInfoAndroidImageAlt_alt"
	| "appInfoFDroidImageAlt_alt"
	| "appInfoIosImageAlt_alt"
	| "archive_action"
	| "assignAdminRightsToLocallyAdministratedUserError_msg"
	| "attachFiles_action"
	| "attachmentName_label"
	| "auditLogInfo_msg"
	| "auditLog_title"
	| "automaticRenewal_label"
	| "back_action"
	| "bcc_label"
	| "birthday_alt"
	| "bookingItemUsersIncludingWhitelabel_label"
	| "bookingItemUsers_label"
	| "bookingOrder_label"
	| "bookingSummary_label"
	| "breakLink_action"
	| "businessChangeInfo_msg"
	| "businessOrPrivateUsage_label"
	| "buyEmailAliasInfo_msg"
	| "buyStorageCapacityInfo_msg"
	| "buy_action"
	| "by_label"
	| "callNumber_alt"
	| "cameraUsageDescription_msg"
	| "cancelContactForm_label"
	| "cancelledBy_label"
	| "cancelLocalAdminGroup_label"
	| "cancelSharedMailbox_label"
	| "cancelUserAccounts_label"
	| "cancelWhitelabelBooking_label"
	| "cancel_action"
	| "canNotOpenFileOnDevice_msg"
	| "captchaDisplay_label"
	| "captchaEnter_msg"
	| "captchaInfo_msg"
	| "captchaInput_label"
	| "catchAllMailbox_label"
	| "cc_label"
	| "certificateChainInfo_msg"
	| "certificateChain_label"
	| "certificateError_msg"
	| "certificateExpiryDate_label"
	| "certificateStateInvalid_label"
	| "certificateStateProcessing_label"
	| "certificateTypeAutomatic_label"
	| "certificatTypeManual_label"
	| "changeAdminPassword_msg"
	| "changePasswordCode_msg"
	| "changePassword_label"
	| "changePermissions_msg"
	| "changeTimeFrame_msg"
	| "chooseDirectory_action"
	| "chooseNumber_msg"
	| "choosePhotos_action"
	| "choose_label"
	| "clearFolder_action"
	| "clickNumber_msg"
	| "clickToUpdate_msg"
	| "client_label"
	| "closedSessions_label"
	| "closeSession_action"
	| "closeWindowConfirmation_msg"
	| "close_alt"
	| "comboBoxSelectionNone_msg"
	| "comment_label"
	| "community_label"
	| "company_label"
	| "confidentialStatus_msg"
	| "confidential_action"
	| "confirmCountry_msg"
	| "confirmDeactivateCustomColors_msg"
	| "confirmDeactivateCustomLogo_msg"
	| "confirmDeactivateWhitelabelDomain_msg"
	| "confirmDeleteContactForm_msg"
	| "confirmDeleteFinallyCustomFolder_msg"
	| "confirmDeleteFinallySystemFolder_msg"
	| "confirmDeleteSecondFactor_msg"
	| "contactFormEnterPasswordInfo_msg"
	| "contactFormMailAddressInfo_msg"
	| "contactFormPasswordNotSecure_msg"
	| "contactFormPlaceholder_label"
	| "contactFormReportInfo_msg"
	| "contactFormReport_label"
	| "contactFormStatisticFieldsInfo_msg"
	| "contactFormSubmitConfirm_action"
	| "contactFormSubmitConfirm_msg"
	| "contactFormSubmitError_msg"
	| "contactForms_label"
	| "contactForm_label"
	| "contactsUsageDescription_msg"
	| "contacts_label"
	| "contactView_action"
	| "contentBlocked_msg"
	| "continueSearchMailbox_msg"
	| "contractorInfo_msg"
	| "contractor_label"
	| "copyLink_action"
	| "copy_action"
	| "correctValues_msg"
	| "corrupted_msg"
	| "couldNotAttachFile_msg"
	| "createAccountAccessDeactivated_msg"
	| "createAccountInvalidCaptcha_msg"
	| "createAccountRunning_msg"
	| "createActionStatus_msg"
	| "createContactForm_label"
	| "createContactRequest_action"
	| "createContactsForRecipients_action"
	| "createContacts_label"
	| "createContact_action"
	| "createdUsersCount_msg"
	| "created_label"
	| "createSearchIndex_msg"
	| "creditCardCardHolderName_label"
	| "creditCardCardHolderName_msg"
	| "creditCardCVVFormat_label"
	| "creditCardCVVInvalid_msg"
	| "creditCardCVV_label"
	| "creditCardExpirationDateFormat_msg"
	| "creditCardExpirationDate_label"
	| "creditCardExprationDateInvalid_msg"
	| "creditCardNumberFormat_msg"
	| "creditCardNumberInvalid_msg"
	| "creditCardNumber_label"
	| "currentlyBooked_label"
	| "customColorsInfo_msg"
	| "customColors_label"
	| "customDomainDeletePreconditionFailed_msg"
	| "customDomainDeletePreconditionWhitelabelFailed_msg"
	| "customDomainDomainAssigned_msg"
	| "customDomainErrorDnsLookupFailure_msg"
	| "customDomainErrorDomainNotAvailable_msg"
	| "customDomainErrorInvalidDnsRecord_msg"
	| "customDomainErrorMissingMxEntry_msg"
	| "customDomainErrorMissingSpfEntry_msg"
	| "customDomainNeutral_msg"
	| "customEmailDomains_label"
	| "customLabel_label"
	| "customLogoInfo_msg"
	| "customLogo_label"
	| "customMetaTags_label"
	| "custom_label"
	| "cut_action"
	| "dataExpired_msg"
	| "dateFrom_label"
	| "dateInvalidRange_msg"
	| "dateTo_label"
	| "date_label"
	| "deactivateAlias_msg"
	| "deactivated_label"
	| "deactivateOwnAccountInfo_msg"
	| "deactivatePremiumWithCustomDomainError_msg"
	| "deactivate_action"
	| "defaultColor_label"
	| "defaultDownloadPath_label"
	| "defaultEmailSignature_msg"
	| "defaultExternalDeliveryInfo_msg"
	| "defaultExternalDelivery_label"
	| "defaultMailHandler_label"
	| "defaultMailHandler_msg"
	| "defaultSenderMailAddressInfo_msg"
	| "defaultSenderMailAddress_label"
	| "deleteAccountConfirm_msg"
	| "deleteAccountReasonInfo_msg"
	| "deleteAccountReason_label"
	| "deleteAccountWithTakeoverConfirm_msg"
	| "deleteAlias_msg"
	| "deleteContacts_action"
	| "deleteContacts_msg"
	| "deleteContact_msg"
	| "deleteCredentials_action"
	| "deleteEmails_action"
	| "delete_action"
	| "desktopSettings_label"
	| "desktop_label"
	| "details_label"
	| "differentSecurityKeyDomain_msg"
	| "discardChanges_action"
	| "display_action"
	| "domain_label"
	| "downgradeToPremium_msg"
	| "download_action"
	| "draft_action"
	| "duplicatedMailAddressInUserList_msg"
	| "duplicatesNotification_msg"
	| "editContactForm_label"
	| "editContact_label"
	| "editMail_action"
	| "edit_action"
	| "emailAddressInUse_msg"
	| "emailAliasesTooManyActivatedForBooking_msg"
	| "emailAlias_label"
	| "emailProcessing_label"
	| "emailPushNotification_action"
	| "emailPushNotification_msg"
	| "emailSenderBlacklist_action"
	| "emailSenderDiscardlist_action"
	| "emailSenderExistingRule_msg"
	| "emailSenderInvalidRule_msg"
	| "emailSenderPlaceholder_label"
	| "emailSenderRule_label"
	| "emailSenderWhitelist_action"
	| "emailSender_label"
	| "emailSending_label"
	| "emailSignatureTypeCustom_msg"
	| "emailSignatureTypeDefault_msg"
	| "emails_label"
	| "email_label"
	| "enableSearchMailbox_msg"
	| "endOfSubscriptionPeriod_label"
	| "endsWith_label"
	| "enforcePasswordUpdate_msg"
	| "enforcePasswordUpdate_title"
	| "enterAsCSV_msg"
	| "enterMissingPassword_msg"
	| "enterName_msg"
	| "enterPaymentDataFirst_msg"
	| "enterPresharedPassword_msg"
	| "enumValue_label"
	| "enum_label"
	| "envelopeSenderInfo_msg"
	| "errorAtLine_msg"
	| "errorDuringUpdate_msg"
	| "errorReport_label"
	| "expiredLink_msg"
	| "exportSelectedAsVCard_action"
	| "exportVCard_action"
	| "export_action"
	| "externalFormattingInfo_msg"
	| "externalFormatting_label"
	| "externalMailPassword_msg"
	| "externalNotificationMailBody1_msg"
	| "externalNotificationMailBody2_msg"
	| "externalNotificationMailBody3_msg"
	| "externalNotificationMailBody4_msg"
	| "externalNotificationMailBody5_msg"
	| "externalNotificationMailBody6_msg"
	| "externalNotificationMailSubject_msg"
	| "facebook_label"
	| "failedDebitAttempt_msg"
	| "fax_label"
	| "feedbackOnErrorInfo_msg"
	| "field_label"
	| "fileAccessDeniedMobile_msg"
	| "filter_label"
	| "finallyDeleteEmails_msg"
	| "finallyDeleteSelectedEmails_msg"
	| "firstMergeContact_label"
	| "firstName_placeholder"
	| "firstReminderAutomatic_msg"
	| "firstReminderSubject_msg"
	| "folderNameCreate_label"
	| "folderNameInvalidExisting_msg"
	| "folderNameNeutral_msg"
	| "folderNameRename_label"
	| "folderName_label"
	| "folderTitle_label"
	| "footer_label"
	| "formatTextAlignment_msg"
	| "formatTextBold_msg"
	| "formatTextCenter_msg"
	| "formatTextFontSize_msg"
	| "formatTextItalic_msg"
	| "formatTextJustify_msg"
	| "formatTextLeft_msg"
	| "formatTextMonospace_msg"
	| "formatTextOl_msg"
	| "formatTextRight_msg"
	| "formatTextUl_msg"
	| "formatTextUnderline_msg"
	| "forward_action"
	| "from_label"
	| "functionNotSupported_msg"
	| "germanLanguageFile_label"
	| "globalAdmin_label"
	| "globalSettings_label"
	| "goPremium_msg"
	| "gross_label"
	| "groupMembers_label"
	| "groupNotEmpty_msg"
	| "groups_label"
	| "groupType_label"
	| "group_label"
	| "header_label"
	| "helpPage_label"
	| "howtoMailBody_markdown"
	| "howtoMailSubject_msg"
	| "htmlSourceCode_label"
	| "html_action"
	| "ignoreCase_alt"
	| "importUsers_action"
	| "importVCardError_msg"
	| "importVCardSuccess_msg"
	| "importVCard_action"
	| "imprintUrl_label"
	| "imprint_label"
	| "inboxRuleAlreadyExists_msg"
	| "inboxRuleBCCRecipientEquals_action"
	| "inboxRuleCCRecipientEquals_action"
	| "inboxRuleEnterValue_msg"
	| "inboxRuleField_label"
	| "inboxRuleInvalidEmailAddress_msg"
	| "inboxRuleMailHeaderContains_action"
	| "inboxRuleSenderEquals_action"
	| "inboxRulesSettings_action"
	| "inboxRuleSubjectContains_action"
	| "inboxRuleTargetFolder_label"
	| "inboxRuleToRecipientEquals_action"
	| "inboxRuleValue_label"
	| "indexDeleted_msg"
	| "indexing_error"
	| "insufficientStorageAdmin_msg"
	| "insufficientStorageUser_msg"
	| "insufficientStorageWarning_msg"
	| "invalidBirthday_msg"
	| "invalidCnameRecord_msg"
	| "invalidDateFormat_msg"
	| "invalidInputFormat_msg"
	| "invalidLink_msg"
	| "invalidPassword_msg"
	| "invalidRecipients_msg"
	| "invalidRegistrationCode_msg"
	| "invalidVatIdNumber_msg"
	| "invalidVatIdValidationFailed_msg"
	| "invitationMailBody_msg"
	| "invitationMailSubject_msg"
	| "invite_alt"
	| "invoiceAddressInfoBusiness_msg"
	| "invoiceAddressInput_msg"
	| "invoiceAddress_label"
	| "invoiceCountryInfoBusiness_msg"
	| "invoiceCountryInfoConsumer_msg"
	| "invoiceCountry_label"
	| "invoiceData_msg"
	| "invoiceMailBodyAutomatic_msg"
	| "invoiceMailBodyOnAccount_msg"
	| "invoiceMailSubject_msg"
	| "invoiceNotPaidUser_msg"
	| "invoiceNotPaid_msg"
	| "invoicePayConfirm_msg"
	| "invoicePaymentMethodInfo_msg"
	| "invoicePay_action"
	| "invoiceSettingDescription_msg"
	| "invoiceStateCancelled_label"
	| "invoiceStateOpen_label"
	| "invoiceStatePaid_label"
	| "invoiceStatePaymentFailed_label"
	| "invoiceStateRefunded_label"
	| "invoiceStateResolving_label"
	| "invoiceState_label"
	| "invoices_label"
	| "invoiceTotal_label"
	| "invoiceUpdateProgress"
	| "invoiceVatIdNoInfoBusiness_msg"
	| "invoiceVatIdNoMissing_msg"
	| "invoiceVatIdNo_label"
	| "IpAddress_label"
	| "keyboardShortcuts_title"
	| "knownCredentials_label"
	| "languageAlbanianref_label"
	| "languageAlbanian_label"
	| "languageArabic_label"
	| "languageBosnian_label"
	| "languageBulgarian_label"
	| "languageCatalan_label"
	| "languageChineseSimplified_label"
	| "languageChineseTraditional_label"
	| "languageCroatian_label"
	| "languageCzech_label"
	| "languageDanish_label"
	| "languageDutch_label"
	| "languageEnglish_label"
	| "languageEstonian_label"
	| "languageFilipino_label"
	| "languageFinnish_label"
	| "languageFrench_label"
	| "languageGalician_label"
	| "languageGeorgian_label"
	| "languageGermanSie_label"
	| "languageGerman_label"
	| "languageGreek_label"
	| "languageHebrew_label"
	| "languageHindi_label"
	| "languageHungarian_label"
	| "languageIndonesian_label"
	| "languageItalian_label"
	| "languageJapanese_label"
	| "languageKorean_label"
	| "languageLatvian_label"
	| "languageLithuanian_label"
	| "languageMalay_label"
	| "languageNorwegian_label"
	| "languagePersian_label"
	| "languagePolish_label"
	| "languagePortugeseBrazil_label"
	| "languagePortugesePortugal_label"
	| "languageRomanian_label"
	| "languageRussian_label"
	| "languageSerbian_label"
	| "languageSlovak_label"
	| "languageSlovenian_label"
	| "languageSpanish_label"
	| "languageSwahili_label"
	| "languageSwedish_label"
	| "languageTamil_label"
	| "languageTurkish_label"
	| "languageUkrainian_label"
	| "languageUrdu_label"
	| "languageVietnamese_label"
	| "language_label"
	| "lastAccess_label"
	| "lastName_placeholder"
	| "laterInvoicingInfo_msg"
	| "linkedin_label"
	| "loading_msg"
	| "localAdminGroupAssignedError_msg"
	| "localAdminGroups_label"
	| "localAdminGroup_label"
	| "localAdmin_label"
	| "location_label"
	| "loggingOut_msg"
	| "loginAbuseDetected_msg"
	| "loginCredentials_label"
	| "loginFailedOften_msg"
	| "loginFailed_msg"
	| "loginNameInfoAdmin_msg"
	| "loginOtherAccount_action"
	| "login_action"
	| "login_label"
	| "login_msg"
	| "logout_label"
	| "mailAddressAliasesMaxNbr_label"
	| "mailAddressAliases_label"
	| "mailAddressAvailable_msg"
	| "mailAddressBusy_msg"
	| "mailAddressDelay_msg"
	| "mailAddressInvalid_msg"
	| "mailAddressNA_msg"
	| "mailAddressNeutral_msg"
	| "mailAddress_label"
	| "mailBody_label"
	| "mailbox_label"
	| "mailFolder_label"
	| "mailHeaders_title"
	| "mailName_label"
	| "mailNotificationHello_msg"
	| "mailNotificationRegards_msg"
	| "mailSendFailureBody_msg"
	| "mailSendFailureCustomerOnlyBody_msg"
	| "mailSendFailureNonExistingRecipientBody_msg"
	| "mailSendFailureRecipientMailboxLimitReached_msg"
	| "mailSendFailureSubject_msg"
	| "mailSendFailureTechnicalError_msg"
	| "mailSettings_label"
	| "mailView_action"
	| "makeLink_action"
	| "markRead_action"
	| "markUnread_action"
	| "matchCase_alt"
	| "mergeAllSelectedContacts_msg"
	| "mergeContacts_action"
	| "merge_action"
	| "microphoneUsageDescription_msg"
	| "mobile_label"
	| "modified_label"
	| "moreInformation_action"
	| "moreInfo_msg"
	| "moreResultsFound_msg"
	| "more_label"
	| "move_action"
	| "name_label"
	| "nbrOfContactsSelected_msg"
	| "nbrOfInboxRules_msg"
	| "nbrOfMailsSelected_msg"
	| "net_label"
	| "newContact_action"
	| "newMails_msg"
	| "newMail_action"
	| "newPassword_label"
	| "nextSubscriptionPrice_msg"
	| "next_action"
	| "nickname_placeholder"
	| "noAppAvailable_msg"
	| "noContacts_msg"
	| "noContact_msg"
	| "noEntries_msg"
	| "noInputWasMade_msg"
	| "noMailHeadersInfo_msg"
	| "noMails_msg"
	| "noMail_msg"
	| "noMoreSimilarContacts_msg"
	| "nonConfidentialStatus_msg"
	| "nonConfidential_action"
	| "noPermission_title"
	| "noPreSharedPassword_msg"
	| "noReceivingMailbox_label"
	| "noRecipients_msg"
	| "noSelection_msg"
	| "noSimilarContacts_msg"
	| "noSubject_msg"
	| "notASubdomain_msg"
	| "notAvailableInApp_msg"
	| "notFound404_msg"
	| "notificationMailLanguage_label"
	| "notificationsDisabled_label"
	| "notificationSettings_action"
	| "notSigned_msg"
	| "no_label"
	| "npoDiscount_msg"
	| "npoDonation_msg"
	| "number_label"
	| "ok_action"
	| "oldPasswordInvalid_msg"
	| "oldPasswordNeutral_msg"
	| "oldPassword_label"
	| "oneContactSelected_msg"
	| "oneMailSelected_msg"
	| "onlyAvailableForPremiumNotIncluded_msg"
	| "onlyAvailableForPremium_msg"
	| "onlyPrivateComputer_msg"
	| "openCamera_action"
	| "openNewWindow_action"
	| "open_action"
	| "operationStillActive_msg"
	| "optionalValues_label"
	| "orderAliasesConfirm_msg"
	| "orderProcessingAgreementInfo_msg"
	| "orderProcessingAgreement_label"
	| "order_action"
	| "otherPaymentProviderError_msg"
	| "other_label"
	| "outdatedClient_msg"
	| "outlookInvoiceMailBodyAutomatic_msg"
	| "outlookInvoiceMailBodyOnAccount_msg"
	| "packageDowngradeUserAccounts_label"
	| "packageUpgradeUserAccounts_label"
	| "pageTitle_label"
	| "parentConfirmation_msg"
	| "password1InvalidSame_msg"
	| "password1InvalidUnsecure_msg"
	| "password1Neutral_msg"
	| "password2Invalid_msg"
	| "password2Neutral_msg"
	| "passwordEnterNeutral_msg"
	| "passwordFor_label"
	| "passwordImportance_msg"
	| "passwordResetFailed_msg"
	| "passwordValid_msg"
	| "passwordWrongInvalid_msg"
	| "password_label"
	| "paste_action"
	| "pathAlreadyExists_msg"
	| "paymentAccountRejected_msg"
	| "paymentDataPayPalFinished_msg"
	| "paymentDataPayPalLogin_msg"
	| "paymentDataValidation_action"
	| "paymentMethodCreditCard_label"
	| "paymentMethodNotAvailable_msg"
	| "paymentMethodOnAccount_label"
	| "paymentMethodOnAccount_msg"
	| "paymentMethod_label"
	| "paymentProviderNotAvailableError_msg"
	| "paymentProviderTransactionFailedError_msg"
	| "payPalRedirect_msg"
	| "periodOfTime_label"
	| "permanentAliasWarning_msg"
	| "phone_label"
	| "photoLibraryUsageDescription_msg"
	| "plaintext_action"
	| "pleaseEnterEnumValues_msg"
	| "pleaseEnterValidPath_msg"
	| "pleaseWait_msg"
	| "postpone_action"
	| "premiumOffer_msg"
	| "presharedPasswordNotStrongEnough_msg"
	| "presharedPasswordsUnequal_msg"
	| "presharedPassword_label"
	| "preview_label"
	| "previous_action"
	| "priceChangeValidFrom_label"
	| "priceFirstYear_label"
	| "priceForCurrentAccountingPeriod_label"
	| "priceForNextYear_label"
	| "priceFrom_label"
	| "priceTill_label"
	| "price_label"
	| "pricing.basePriceExcludesTaxes_msg"
	| "pricing.basePriceIncludesTaxes_msg"
	| "pricing.businessUse_label"
	| "pricing.comparisonAddUser_msg"
	| "pricing.comparisonContactFormPro_msg"
	| "pricing.comparisonDomainFree_msg"
	| "pricing.comparisonDomainPremium_msg"
	| "pricing.comparisonInboxRulesPremium_msg"
	| "pricing.comparisonLoginPro_msg"
	| "pricing.comparisonSearchFree_msg"
	| "pricing.comparisonSearchPremium_msg"
	| "pricing.comparisonStorage_msg"
	| "pricing.comparisonSupportPremium_msg"
	| "pricing.comparisonSupportPro_msg"
	| "pricing.comparisonThemePro_msg"
	| "pricing.comparisonUsersFree_msg"
	| "pricing.currentPlan_label"
	| "pricing.mailAddressAliasesShort_label"
	| "pricing.monthly_label"
	| "pricing.perMonth_label"
	| "pricing.perYear_label"
	| "pricing.privateUse_label"
	| "pricing.select_action"
	| "pricing.upgradeLater_msg"
	| "pricing.yearly_label"
	| "print_action"
	| "privacyLink_label"
	| "privacyPolicyUrl_label"
	| "privateKeyInfo_msg"
	| "privateKey_label"
	| "private_label"
	| "progressDeleting_msg"
	| "promotion.npoDiscount_msg"
	| "promotion.npoDonation_msg"
	| "promotion.tresoritDiscount_msg"
	| "pushIdentifierCurrentDevice_label"
	| "pushIdentifierInfoMessage_msg"
	| "pushNewMailReceivedBody_msg"
	| "pushNewMail_msg"
	| "pwChangeValid_msg"
	| "quit_action"
	| "readResponse_action"
	| "reallySubmitContent_msg"
	| "received_action"
	| "receivingMailboxAlreadyUsed_msg"
	| "receivingMailbox_label"
	| "recipients_label"
	| "recoverAccountAccess_action"
	| "recoverResetFactors_action"
	| "recoverSetNewPassword_action"
	| "recoveryCodeEmpty_msg"
	| "recoveryCode_label"
	| "recoveryCode_msg"
	| "recover_label"
	| "redo_action"
	| "refresh_action"
	| "registeredU2fDevice_msg"
	| "registered_label"
	| "registerU2fDevice_msg"
	| "register_label"
	| "registrationHeadline_msg"
	| "releaseNotes_action"
	| "remindersUsageDescription_msg"
	| "removeFormatting_action"
	| "removeGroup_action"
	| "removeOwnAdminFlagInfo_msg"
	| "removeStatisticsField_action"
	| "removeUserFromGroupNotAdministratedError_msg"
	| "removeUserFromGroupNotAdministratedUserError_msg"
	| "remove_action"
	| "rename_action"
	| "repeatedPassword_label"
	| "replyAll_action"
	| "replyTo_label"
	| "reply_action"
	| "requestApproval_msg"
	| "responsiblePersonsInfo_msg"
	| "responsiblePersons_label"
	| "restartBefore_action"
	| "retry_action"
	| "richText_label"
	| "role_placeholder"
	| "runAsTrayApp_action"
	| "runOnStartup_action"
	| "saveAll_action"
	| "saveDownloadNotPossibleIe_msg"
	| "saveDownloadNotPossibleIos_msg"
	| "saveDraft_action"
	| "saveEncryptedIpAddress_label"
	| "save_action"
	| "save_msg"
	| "scrollDown_action"
	| "scrollToBottom_action"
	| "scrollToTop_action"
	| "scrollUp_action"
	| "searchContacts_placeholder"
	| "searchDisabled_msg"
	| "searchedUntil_msg"
	| "searchEmails_placeholder"
	| "searchGroups_placeholder"
	| "searchMailbox_label"
	| "searchNoResults_msg"
	| "searchPage_action"
	| "searchResult_label"
	| "searchUsers_placeholder"
	| "search_label"
	| "secondFactorAuthentication_label"
	| "secondFactorConfirmLoginNoIp_msg"
	| "secondFactorConfirmLogin_label"
	| "secondFactorConfirmLogin_msg"
	| "secondFactorNameInfo_msg"
	| "secondFactorPendingOtherClientOnly_msg"
	| "secondFactorPending_msg"
	| "secondMergeContact_label"
	| "secondReminderAutomatic_msg"
	| "secondReminderSubject_msg"
	| "security_title"
	| "selectionNotAvailable_msg"
	| "selectNext_action"
	| "selectPeriodOfTime_label"
	| "selectPrevious_action"
	| "sendErrorReport_action"
	| "sender_label"
	| "sendingSms_msg"
	| "sendingUnencrypted_msg"
	| "sending_msg"
	| "sendMail_alt"
	| "send_action"
	| "sent_action"
	| "serverDownForMaintenance_msg"
	| "serverNotReachable_msg"
	| "serviceUnavailable_msg"
	| "sessionsInfo_msg"
	| "sessionsWillBeDeleted_msg"
	| "setCatchAllMailbox_action"
	| "settingsView_action"
	| "settings_label"
	| "setUp_action"
	| "sharedMailboxes_label"
	| "sharedMailbox_label"
	| "showAddress_alt"
	| "showBlockedContent_action"
	| "showContact_action"
	| "showEmailAliases_action"
	| "showHeaders_action"
	| "showHelp_action"
	| "showInboxRules_action"
	| "showMail_action"
	| "showMoreUpgrade_action"
	| "showMore_action"
	| "showRichTextToolbar_action"
	| "showURL_alt"
	| "show_action"
	| "signedOn_msg"
	| "signingNeeded_msg"
	| "signupOneFreeAccountConfirm_msg"
	| "sign_action"
	| "skip_action"
	| "smsError_msg"
	| "smsResent_msg"
	| "smsSentOften_msg"
	| "smsSent_msg"
	| "social_label"
	| "spamRuleEnterValue_msg"
	| "spam_action"
	| "startAfterEnd_label"
	| "state_label"
	| "statisticsFieldsInfo_msg"
	| "statisticsFields_label"
	| "stillReferencedFromContactForm_msg"
	| "storageCapacityTooManyUsedForBooking_msg"
	| "storageCapacityUsed_label"
	| "storageCapacity_label"
	| "storageDeletionAnnouncement_msg"
	| "storageDeletion_msg"
	| "storePassword_action"
	| "subject_label"
	| "subscriptionCancelledMessage_msg"
	| "subscriptionPeriod_label"
	| "subscription_label"
	| "summary_label"
	| "supportMenu_label"
	| "switchArchive_action"
	| "switchColorTheme_action"
	| "switchDrafts_action"
	| "switchInbox_action"
	| "switchSearchInMenu_label"
	| "switchSentFolder_action"
	| "switchSpam_action"
	| "switchTrash_action"
	| "takeoverAccountInvalid_msg"
	| "takeoverMailAddressInfo_msg"
	| "takeoverMailAddress_label"
	| "termsAcceptedNeutral_msg"
	| "termsAndConditionsLink_label"
	| "termsAndConditions_label"
	| "text_label"
	| "thisClient_label"
	| "time_label"
	| "title_placeholder"
	| "today_label"
	| "tooBigAttachment_msg"
	| "tooManyAttempts_msg"
	| "tooManyMails_msg"
	| "totpAuthenticator_label"
	| "totpCodeConfirmed_msg"
	| "totpCodeEnter_msg"
	| "totpCodeWrong_msg"
	| "totpCode_label"
	| "totpSecret_label"
	| "totpTransferSecretApp_msg"
	| "totpTransferSecret_msg"
	| "to_label"
	| "trash_action"
	| "tresoritDiscount_msg"
	| "tutaoInfo_msg"
	| "twitter_label"
	| "typeToFilter_label"
	| "type_label"
	| "u2fAuthUnregisteredDevice_msg"
	| "u2fSecurityKey_label"
	| "u2fUnexpectedError_msg"
	| "undo_action"
	| "unknownError_msg"
	| "unlimited_label"
	| "unrecognizedU2fDevice_msg"
	| "unregistered_label"
	| "unsubscribeConfirm_msg"
	| "unsubscribeFailed_msg"
	| "unsubscribeSuccessful_msg"
	| "unsubscribe_action"
	| "unsupportedBrowserOverlay_msg"
	| "unsupportedBrowser_msg"
	| "updateAdminshipGlobalAdmin_msg"
	| "updateAdminshipLocalAdminGroupError_msg"
	| "updateAvailable_label"
	| "updateFound_label"
	| "updateOwnAdminship_msg"
	| "updatePaymentDataBusy_msg"
	| "update_action"
	| "upgradeConfirm_msg"
	| "upgradePremium_label"
	| "upgradeProNoReduction_msg"
	| "upgradePro_msg"
	| "upgradeReminderCancel_action"
	| "upgradeReminderTitle_msg"
	| "upgradeSystemWebView_msg"
	| "upgrade_action"
	| "urlPath_label"
	| "url_label"
	| "userAccountDeactivated_msg"
	| "userColumn_label"
	| "userEmailSignature_label"
	| "userSettings_label"
	| "validInputFormat_msg"
	| "waitingForApproval_msg"
	| "wantToSendReport_msg"
	| "welcomeMailBody1_msg"
	| "welcomeMailBody2_msg"
	| "welcomeMailBody3a_msg"
	| "welcomeMailBody3_msg"
	| "welcomeMailBody4_msg"
	| "welcomeMailBody5_msg"
	| "welcomeMailBody6_msg"
	| "welcomeMailBodyTweetText_msg"
	| "welcomeMailBody_markdown"
	| "welcomeMailSubject_msg"
	| "whitelabelAccounts_label"
	| "whitelabelAccount_label"
	| "whitelabelBooking_label"
	| "whitelabelDomainExisting_msg"
	| "whitelabelDomainLinkInfo_msg"
	| "whitelabelDomainNeeded_msg"
	| "whitelabelDomain_label"
	| "whitelabelRegistrationCode_label"
	| "whitelabelRegistrationEmailDomain_label"
	| "whitelabel_label"
	| "whitelistProtectionInfo_label"
	| "whitelistProtection_label"
	| "work_label"
	| "wrongUserCsvFormat_msg"
	| "xing_label"
	| "yesterday_label"
	| "yes_label"
	| "yourFolders_action"
	| "yourMessage_label"
	| "emptyString_msg"
	| "certificateType_label"
	| "showAll_action"
