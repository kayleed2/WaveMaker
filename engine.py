import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, C16, C17

engine = create_engine('mysql+mysqldb://root:@localhost/demodb')

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

cohort_16 = [
    {'name': 'Kaylee', 'spec': 'FS'},
    {'name': 'Joseph', 'spec': 'FS'},
    {'name': 'Adam', 'spec': 'ARVR'},
    {'name': 'Autumn', 'spec': 'LL'},
]

cohort_17 = [
    {'name': 'Sam', 'spec': 'FS'},
    {'name': 'Jessica', 'spec': 'FS'},
    {'name': 'John', 'spec': 'ARVR'},
    {'name': 'Joe', 'spec': 'LL'},
]

record = session.query(C16, C17)
for el in record:
    for i in el:
        if i.spec == 'FS':
            print(i.name)

session.commit()
session.close()
