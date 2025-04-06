import tkinter as tk
import random
import tkinter.messagebox
class MazeGame:

    def __init__(self, master, rows=50, cols=50, cell_size=30):
        self.master = master
        master.title("spooky scary labirint")

        self.rows = rows
        self.cols = cols
        self.cell_size = cell_size
        self.player_row = 1
        self.player_col = 1

        self.canvas_width = self.cols * self.cell_size
        self.canvas_height = self.rows * self.cell_size
        self.canvas = tk.Canvas(master, width=self.canvas_width, height=self.canvas_height, bg="white")
        self.canvas.pack()
        self.canvas.focus_set()
        self.maze = self.generate_maze()
        self.draw_maze()
        self.player = self.canvas.create_rectangle(
            self.player_col * self.cell_size,
            self.player_row * self.cell_size,
            (self.player_col + 1) * self.cell_size,
            (self.player_row + 1) * self.cell_size,
            fill="red"
        )
        master.bind("<Key>", self.key_press)

    def key_press(self, event):
        if event.keysym == "Up":
            self.move_up(event)
        elif event.keysym == "Down":
            self.move_down(event)
        elif event.keysym == "Left":
            self.move_left(event)
        elif event.keysym == "Right":
            self.move_right(event)

    def generate_maze(self):
        maze = [[1 for _ in range(self.cols)] for _ in range(self.rows)]

        def carve_path(row, col):
            maze[row][col] = 0
            directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
            random.shuffle(directions)
            for dr, dc in directions:
                new_row, new_col = row + dr * 2, col + dc * 2
                if 0 < new_row < self.rows - 1 and 0 < new_col < self.cols - 1 and maze[new_row][new_col] == 1:
                    maze[row + dr][col + dc] = 0
                    carve_path(new_row, new_col)
        carve_path(1, 1)
        maze[self.rows - 2][self.cols - 1] = 0
        return maze

    def draw_maze(self):
        for row in range(self.rows):
            for col in range(self.cols):
                if self.maze[row][col] == 1:
                    x1 = col * self.cell_size
                    y1 = row * self.cell_size
                    x2 = (col + 1) * self.cell_size
                    y2 = (row + 1) * self.cell_size
                    self.canvas.create_rectangle(x1, y1, x2, y2, fill="black", outline="")
                else:
                    x1 = col * self.cell_size
                    y1 = row * self.cell_size
                    x2 = (col + 1) * self.cell_size
                    y2 = (row + 1) * self.cell_size
                    self.canvas.create_rectangle(x1, y1, x2, y2, fill="white", outline="")

    def is_valid_move(self, row, col):
        print(f"Checking if move to ({row}, {col}) is valid")
        if 0 <= row < self.rows and 0 <= col < self.cols and self.maze[row][col] == 0:
            print(f"Move to ({row}, {col}) is VALID")
            return True
        else:
            print(f"Move to ({row}, {col}) is INVALID")
            return False

    def move_player(self, drow, dcol):
        new_row = self.player_row + drow
        new_col = self.player_col + dcol
        print(f"Attempting to move player by drow={drow}, dcol={dcol} from ({self.player_row}, {self.player_col}) to ({new_row}, {new_col})") # Отладка
        if self.is_valid_move(new_row, new_col):
            self.player_row = new_row
            self.player_col = new_col
            print(f"Player successfully moved to ({self.player_row}, {self.player_col})")
            x1 = self.player_col * self.cell_size
            y1 = self.player_row * self.cell_size
            x2 = (self.player_col + 1) * self.cell_size
            y2 = (self.player_row + 1) * self.cell_size
            self.canvas.coords(self.player, x1, y1, x2, y2)
            self.check_win()
        else:
            print("нельзя пройти")

    def move_up(self, event):
        self.move_player(-1, 0)
    def move_down(self, event):
        self.move_player(1, 0)
    def move_left(self, event):
        self.move_player(0, -1)
    def move_right(self, event):
        self.move_player(0, 1)
    def check_win(self):
        if self.player_row == self.rows - 2 and self.player_col == self.cols - 1:
            tk.messagebox.showinfo("Вы прошли! поздравляем :3")
            self.master.destroy()


root = tk.Tk()
game = MazeGame(root)
root.mainloop()