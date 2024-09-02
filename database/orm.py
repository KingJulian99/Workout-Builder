from sqlalchemy import create_engine, ForeignKey, Column, String, Integer, CHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Person(Base):
    __tablename__ = "people"
    
    ssn = Column("ssn", Integer, primary_key=True)
    firstname = Column("firstname", String)
    lastname = Column("lastname", String)
    gender = Column("gender", CHAR)
    age = Column("age", Integer)
    
    def __init__(self, ssn, first, last, gender, age):
        self.ssn = ssn
        self.firstname = first
        self.lastname = last
        self.gender = gender
        self.age = age
        
    def __repr__(self):
        return f"({self.ssn}) {self.firstname} {self.lastname} ({self.gender}, {self.age})"

engine = create_engine("sqlite:///mydb.db", echo=True)
Base.metadata.create_all(bind=engine)

Session = sessionmaker(bind=engine)
session = Session()

# person = Person(12312, "Mike", "Smith", "m", 35)
# session.add(person)
# session.commit() 

# p1 = Person(31234, "Anna", "Blue", "f", 40)
# p2 = Person(32423, "Bob", "Blue", "m", 35)
# p3 = Person(45654, "Angela", "Cold", "f", 22)

# session.add(p1)
# session.add(p2)
# session.add(p3)

# session.commit()

results = session.query(Person).all()
print(results)