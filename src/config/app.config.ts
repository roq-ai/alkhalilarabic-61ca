interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Student'],
  tenantRoles: ['Administrator', 'Teacher'],
  tenantName: 'Company',
  applicationName: 'Alkhalilarabic',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
