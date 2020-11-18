export function splitCheck(object: Record<string, unknown>): void {
  const total = object.total as number;
  const splitArray = object.split as Record<string, string | number>[];

  let splitsTotal = 0;

  splitArray.forEach((entity: Record<string, string | number>) => {
    const entityTotal = entity.total as number;
    splitsTotal += entityTotal;
  });

  if (total > splitsTotal) {
    throw new Error(
      `The sum of the splits total is less than the checkout total. Is $${splitsTotal}, should be $${total}`
    );
  }

  if (total < splitsTotal) {
    throw new Error(
      `The sum of the splits total is greater than the checkout total. Is $${splitsTotal}, should be $${total}`
    );
  }
}
