//using priority heap
// function lastStoneWeight(stones: number[]): number {

//     const maxHeap = new MaxPriorityQueue<number>()

//     //need to sort array or use a maxheap
//     for (const s of stones) maxHeap.enqueue(s);
//     //prosess the last and second last
//     while(maxHeap.size() > 1){
//         const last = maxHeap.dequeue()
//         const secondLast = maxHeap.dequeue()
//        //resort the array or put in maxheap
//         if(last > secondLast){
//             maxHeap.enqueue(last-secondLast)
//         }
//     }
//     //return the last element if exist if not return 0
//     return maxHeap.size() ? maxHeap.dequeue() : 0
// };



// Simple max heap implementation using a sorted array
function lastStoneWeight(stones: number[]): number {
  let maxHeap: number[] = [...stones].sort((a, b) => b - a);

  while (maxHeap.length > 1) {
    const last: number = maxHeap.shift()!;        // largest
    const secondLast: number = maxHeap.shift()!;  // 2nd largest
    if (last > secondLast) {
      const diff = last - secondLast;
      maxHeap.push(diff);
      maxHeap.sort((a, b) => b - a); // keep it descending
    }
  }

  return maxHeap.length ? maxHeap[0] : 0;
}
