function lastStoneWeight(stones: number[]): number {

    const maxHeap = new MaxPriorityQueue<number>()

    //need to sort array or use a maxheap
    for (const s of stones) maxHeap.enqueue(s);
    //prosess the last and second last 
    while(maxHeap.size() > 1){
        const last = maxHeap.dequeue()
        const secondLast = maxHeap.dequeue()
       //resort the array or put in maxheap
        if(last > secondLast){
            maxHeap.enqueue(last-secondLast)
        }
    }
    //return the last element if exist if not return 0
    return maxHeap.size() ? maxHeap.dequeue() : 0
};