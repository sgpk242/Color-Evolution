function compare(a,b) {
  if (a.fitness > b.fitness)
    return -1;
  else if (a.fitness < b.fitness)
    return 1;
  else 
    return 0;
}
