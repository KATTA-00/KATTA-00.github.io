
# GPV mapping for University of Peradeniya - Faculty of Engineering
GPV_MAP = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.0,
    'E': 0.0
}

# Hardcoded course counts
# Format: (grade, credit, number of such courses)
courses = [
    ('A', 3, 20),    #5 courses of 3 credits with A
    ('A', 4, 1),    #5 courses of 3 credits with A
    ('A', 2, 3),    # 5 courses of 3 credits with A
    ('A-', 3, 1),   # 2 courses of 3 credits with A-
    ('B+', 3, 1),
    # ('B-', 4, 1),
    # ('B', 3, 2)
]

# GPA calculation
total_points = 0
total_credits = 0

for grade, credit, count in courses:
    gpv = GPV_MAP.get(grade, 0.0)
    total_points += gpv * credit * count
    total_credits += credit * count

if total_credits == 0:
    print("No valid courses to compute GPA.")
else:
    gpa = total_points / total_credits
    print(f"Your GPA is: {gpa:.2f}")


