package QueueAndStack;

public class Queue {

    int SIZE = 5;
    int items[] = new int[SIZE];
    int front, rear;

    Queue() {
        front = -1;
        rear = -1;
    }

    boolean isFull() {
        if (front == 0 && rear == SIZE - 1) {
            return true;
        }
        return false;
    }

    boolean isEmpty() {
        if (front == -1)
            return true;
        else
            return false;
    }

    void enQueue(int element) {
        if (isFull()) {
            System.out.println("QUeue is full");
        } else {

            if (front == -1) {
                front = 0;
            }

            rear++;
            items[rear] = element;
            System.out.println(element + "Item inserted");

        }

    }

    int deQueue() {
        int element;

        if (isEmpty()) {
            System.out.println("Queue is empty");

            return (-1);

        } else {
            element = items[front];
            if (front >= rear) {
                front = -1;
                rear = -1;
            } else {

                front++;
            }
            System.out.println("Deleted -> " + element);

            return (element);

        }
    }

    public static void main(String[] args) {

        Queue q = new Queue();
        q.enQueue(1);
        q.enQueue(2);
        q.enQueue(3);
        q.enQueue(4);
        q.enQueue(5);
        q.enQueue(6);


        q.deQueue();
    }

}
