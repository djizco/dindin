const recipes = [
  {
    id: 1,
    name: 'Silicate soup',
    cuisine: 'Martian',
    stars: 100,
    serves: 1,
    prep_time: '2 hours',
    cooking_time: '12 minutes',
  },
  {
    id: 2,
    name: 'Methane trifle',
    cuisine: 'Neptunian',
    stars: 200,
    serves: 1,
    prep_time: '1 hour',
    cooking_time: '24 minutes',
  },
];

function home(request, reply) {
  reply.view('index', { recipes });
}

module.exports = {
  home,
}
