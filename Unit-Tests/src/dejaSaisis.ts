export function dejaSaisis(nbs: number[]) {
  if (!nbs.length) {
    throw new Error('Aucune saisie');
  }

  return 'Vous avez déjà saisi : ' + nbs.join(' | ');
}
