export const goToRecipesList = navigate => {
  navigate('/');
};
export const goToLastPage = navigate => {
  navigate(-1);
};
export const goToLogin = navigate => {
  navigate('/login');
};
export const goToSignUp = navigate => {
  navigate('/cadastro');
};
export const goToAddRecipes = navigate => {
  navigate('/adicionar-receita');
};
export const goToRecipesDetails = (navigate, id) => {
  navigate(`/detalhe/${id}`);
};
