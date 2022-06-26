export const goToHome = navigate => {
  navigate('/');
};
export const goToLastPage = navigate => {
  navigate(-1);
};
export const goToLogin = navigate => {
  navigate('/login');
};
export const goToTripsList = navigate => {
  navigate('/trips/list');
};
export const goToCreateTrip = navigate => {
  console.log('clicou');
  navigate('/admin/trips/create');
};
export const goToTripDetails = (navigate, id) => {
  navigate(`/admin/trips/${id}`);
};
export const goToApplicationForm = navigate => {
  navigate('/trips/application');
};
export const goToAdminHome = navigate => {
  navigate('/admin/trips/list');
};
