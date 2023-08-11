const mapping: Record<string, string> = {
  companies: 'company',
  courses: 'course',
  enrollments: 'enrollment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
