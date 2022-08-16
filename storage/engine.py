import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, User
import requests

engine = create_engine('mysql+mysqldb://root:@localhost/demodb')

Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()

session.commit()
session.close()
